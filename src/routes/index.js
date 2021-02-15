import express from 'express';
import PubController from '../controllers/pub.controller';
import SubController from '../controllers/sub.controller';
import EventController from '../controllers/event.controller';

import validate from '../middlewares/validator.middleware';

const router = express.Router();

router.post('/publish/:topic',
  validate.validateParam(validate.schemas.topicSchema),
  validate.validateBody(validate.schemas.pubSchema),
  PubController.publish);

router.post('/subscribe/:topic',
  validate.validateParam(validate.schemas.topicSchema),
  validate.validateBody(validate.schemas.subSchema),
  SubController.subcribe);

router.post('/event',
  EventController.event);

export default router;