const express = require("express");
const router = express.Router();

const { getRoute, putRoute, signupRoute, deleteRoute, getRouteById, loginRoute } = require('../controllers/egControllers.js')
router.get('/get', getRoute)
router.get('/get/:id', getRouteById)
router.post('/signup', signupRoute)
router.post('/login', loginRoute)
router.put('/put/:id', putRoute)
router.delete('/delete/:id', deleteRoute)

module.exports = router