
class AuthManager {

    async userLogin(req) {

    }

    async userRegistration(req) {
        console.log("Req received : ", req)
        return "Data";
    }

}

module.exports = AuthManager;