const {register} = require("./auth.controller");
const router = require("express").Router;

const authRouter = router();

authRouter.post("/register", register);

module.exports = { authRouter };
