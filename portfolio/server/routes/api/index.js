const router = require('express').Router();
const projectRoutes = require('./project-routes.js');

router.use('/project', projectRoutes);

module.exports = router;
