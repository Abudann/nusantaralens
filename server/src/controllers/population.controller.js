import {
  syncPopulationData,
  fetchIslandById,
} from '../services/sync.service.js';

export const syncPopulation = async (req, res, next) => {
  try {
    const result = await syncPopulationData();

    res.status(200).json({
      status: 'success',
      message: result.message,
      data: {
        total_data: result.totalSynced,
        region: result.data,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getDataIslandById = async (req, res, next) => {
  try {
    const islandId = req.params.islandId;

    const result = await fetchIslandById(islandId);

    res.status(200).json({
      status: 'success',
      message: 'Retrieved data island succesfully',
      data: {
        island: result,
      },
    });
  } catch (error) {
    next(error);
  }
};
