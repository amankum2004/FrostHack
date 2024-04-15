const express = require("express")
const router = express.Router();
const userController = require("../controller/user-controller")
const {signupSchema,loginSchema} = require("../validators/auth-validator")
const validate = require("../middleware/validate-middleware")


router.route("/").get(userController.home)

router.route("/register").post(validate(signupSchema), userController.register)
router.route('/login').post(validate(loginSchema), userController.login)

router.route('/user').get(userController.user)



module.exports = router;


