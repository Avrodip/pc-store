const db = require("../config/database");

class BillingAddressManager {

    async getbillingAddressList(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getbillingAddressList()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async updateBillingAddress(req, res) {
        try {
            const {
                actionType,
                id,
                fullName,
                email,
                telephoneNumber,
                pan,
                streetAddress,
                gst,
                city,
                state,
                zipcode,
                userID
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().execute('CALL updateBillingAddress(?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?)',
                [
                    actionType,
                    id,
                    fullName,
                    email,
                    telephoneNumber,
                    pan,
                    streetAddress,
                    gst,
                    city,
                    state,
                    zipcode,
                    userID
                ]
            );
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async deleteBillingAddress(req, res) {
        try {
            const id = req.body.id;
            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL deleteBillingAddress(?)', [id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
}

module.exports = { BillingAddressManager };
