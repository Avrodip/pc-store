
const AuthManager = require("../managers/auth.manager")

const authManager = new AuthManager();

class AuthController {

    // async userLogin(req, res) {

    // }


    async userRegistration(req, res) {
        try {
            const result = await authManager.register(req);
            return res.send({ "User getting : ": result })
        } catch (error) {
            console.log("Error : ", error)
        }
    }

}

module.exports = { AuthController };