const { Router } = require('express');
const { authController } = require('../controllers/auth.controller.js');
const { catchError } = require('../utils/catchError.js');

const authRouter = Router();

authRouter.post('/registration', catchError(authController.register));

authRouter.get(
  '/activation/:activationToken',
  catchError(authController.activate),
);

authRouter.post('/login', catchError(authController.login));

module.exports = { authRouter };
