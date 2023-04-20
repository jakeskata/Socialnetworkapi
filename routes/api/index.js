const router = require('express').Router();

router.use('/users',require('./userRoutes'));
// router.use('thoughts',require('./thoughtsRoutes'));

module.exports = router;