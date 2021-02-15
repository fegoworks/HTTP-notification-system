import { BadRequest } from '../helpers/errorHandler';
import { messageboard } from '../models';

/**
 * @class SubController
 */
class SubController {
  /**
   * Subcribe to topic
   * @param {*} req: url param
   * @param {*} res: response callback
   * @param {*} next: middleware callback
   * @returns {Object} res
   */
  static async subcribe(req, res, next) {
    try {
      const { topic } = req.params;
      const { url } = req.body;
      const subscription = await messageboard.findOne({ where: { topic, server: url } });
      if (subscription) {
        throw new BadRequest('Already Subscribed', null);
      }
      const newSubscription = await messageboard.create({ topic, server: url });
      if (newSubscription) {
        return res.status(200).json({
          message: 'Successfully subscribed',
          data: {
            url,
            topic
          },
        });
      }
      throw new BadRequest('Unable to subscribe', null);
    } catch (error) {
      next(error);
    }
  }
}

export default SubController;