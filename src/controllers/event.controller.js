import logger from '../configs/logger.config';

/**
 * @class EventController
 */
class EventController {
  /**
   * @param {*} req: url params
   * @param {*} res: response callback
   * @param {*} next: middleware callback
   * @returns {Object} res
   */
  static async event(req, res, next) {
    try {
      const { message, topic } = req.body;
      logger.info(`Subscriber recieving message on topic ${topic}`);
      return res.status(200).json({
        message: `Successfully recieved message from ${topic}`,
        data: {
          message,
          topic
        }
      });
    } catch (error) {
      next(error);
    }
  }
}

export default EventController;