const db = require("../config/database");

class ShippingAddressManager {

    async getShippingAddressList(req, res) {
        try {
            const {
                userID
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getShippingAddressList(?)',[userID]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getShippingAddressByID(req, res) {
        try {
            const {
                id,
                userID
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getShippingAddressByID(?,?)',[id,userID]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async updateShippingAddress(req, res) {
        try {
            const {
                actionType,
                id,
                name,
                contactNumber,
                email,
                address,
                city,
                state,
                country,
                zipcode,
                userID
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().execute('CALL updateShippingAddress(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    actionType,
                    id,
                    name,
                    contactNumber,
                    email,
                    address,
                    city,
                    state,
                    country,
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
    async deleteShippingAddress(req, res) {
        try {
            const id = req.body.id;
            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL deleteShippingAddress(?)', [id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
}

module.exports = { ShippingAddressManager };
