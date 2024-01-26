const db = require("../config/database")

class AuthManager {

    async userLogin(req) {
        const userData = req.body;

        console.log("User Data ", userData)

        try {
            const [existingUser] = await db.promise().query(`SELECT userID from users WHERE email = ? and password = ?`, [userData.emailID, userData.password]);
            if (existingUser.length > 0) {
                return existingUser
            }

            // const [userCheck] = await db.promise().query(`SELECT userID from users WHERE email = ?`, [userData.emailID]);
            // if (userCheck.length > 0) {
            //     return userCheck
            // }

            return [];
        }
        catch (error) {
            console.error("Error during Login: ", error);
            throw error;
        }
    }

    async userRegistration(req) {
        const userData = req.body;

        try {
            const [existingUser] = await db.promise().query(`SELECT userID from users WHERE email = ?`, [userData.emailID]);
            // User Already Exist
            if (existingUser.length > 0) {
                return existingUser.length;
            }

            // If user not exist
            const values = [userData.firstName, userData.lastName, userData.emailID, userData.contactNumber, userData.password];
            const [results] = await db.promise().query("INSERT INTO users (firstName, lastName, email, contact, password) VALUES (?, ?, ?, ?, ?)", values);

            return results;
        }
        catch (error) {
            console.error("Error during registration: ", error);
            throw error;
        }
    }
}

module.exports = AuthManager;