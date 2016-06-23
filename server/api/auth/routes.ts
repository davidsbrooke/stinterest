import * as express from 'express';

const router = express.Router();

router.use('/pinterest', require('./pinterest/routes'));

export = router;
