import { fecthCultures } from '../services/culture.service.js';

export const getAllCultures = async (req, res, next) => {
  try {
    const cultures = await fecthCultures();

    res.status(200).json({
      tatus: 'success',
      message: 'Cultures data retrieved successfully',
      data: {
        cultures: cultures,
      },
    });
  } catch (error) {
    next(error);
  }
};
