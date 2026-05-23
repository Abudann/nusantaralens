import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  upsertPopulation,
  findIslandById,
} from '../repositories/population.repository.js';
import redisClient from '../config/redis.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const syncPopulationData = async () => {
  const populationDirectory = path.join(
    __dirname,
    `../../../data-science/Dataset/Data Penduduk`,
  );

  const files = await fs.readdir(populationDirectory);

  const jsonFiles = files.filter(
    (file) => file.startsWith('jumlah_penduduk_') && file.endsWith('.json'),
  );

  let totalSynced = 0;
  const syncedDataMap = {};

  for (const file of jsonFiles) {
    const filePath = path.join(populationDirectory, file);
    const rawData = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    const slug = file.replace('jumlah_penduduk_', '').replace('.json', '');
    const region = slug
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    for (const item of jsonData) {
      const malePopulation = Number(item.laki_laki);
      const femalePopulation = Number(item.perempuan);
      const totalPopulation = Number(malePopulation + femalePopulation);

      await upsertPopulation({
        slug,
        year: Number(item.tahun),
        region,
        malePopulation,
        femalePopulation,
        totalPopulation,
      });

      const year = Number(item.tahun);

      if (!syncedDataMap[region]) {
        syncedDataMap[region] = {
          city: region,
          start_year: year,
          end_year: year,
        };
      } else {
        syncedDataMap[region].end_year = Math.max(
          syncedDataMap[region].end_year,
          year,
        );
      }

      totalSynced++;
    }
  }
  const syncData = Object.values(syncedDataMap);
  return {
    message: 'Population data synced successfully',
    totalSynced,
    data: syncData,
  };
};

export const fetchIslandById = async (islandId) => {
  const CACHE_KEY = `indonesian:island:${islandId}`;

  const cachedData = await redisClient.get(CACHE_KEY);
  if (cachedData) return JSON.parse(cachedData);

  const island = await findIslandById(islandId);
  if (!island || island.length === 0) {
    const error = new Error('Island not found');
    error.status = 404;
    throw error;
  }

  await redisClient.setEx(CACHE_KEY, 3600, JSON.stringify(island));
  return island;
};
