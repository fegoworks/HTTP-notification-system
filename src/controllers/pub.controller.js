/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import handleSuccessResponse from '../helpers/responseHandler';
import { messageboard } from '../models';

/**
 * @class PubController
 */
class PubController {
  /**
   * Publish A Message
   * @param {*} req: url params
   * @param {*} res: response callback
   * @param {*} next: middleware callback
   * @returns {Object} res
   */
  static async publish(req, res, next) {
    try {
      const published = [];
      const { topic } = req.params;
      const { message } = req.body;
      const subscriptions = await messageboard.findAll({ where: { topic } });
      if (subscriptions) {
        for (const i in subscriptions) {
          const { server } = subscriptions[i];
          const response = await axios.post(server, { topic, message });
          published.push({ server, status: response.status });
        }
        return handleSuccessResponse(res, published);
      }
    } catch (error) {
      next(error);
    }
  }
}

export default PubController;