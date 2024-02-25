const db = require("../config/database");

class OrderManager {

    async getSuccessfullOrderDetailsByUserID(req, res) {
        try {
            const {
                userID
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getSuccessfullOrderDetailsByUserID(?)', [userID]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
}

module.exports = { OrderManager };
