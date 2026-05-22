import { syncPopulationData } from '../services/sync.service.js';

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
