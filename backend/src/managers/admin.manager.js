const db = require("../config/database");

class AdminManager {

    async getKrakenList(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL kraken_series_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getBehemothList(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL behemoth_series_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getPredatorList(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL predator_series_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
            
        }
    }
    async getSlayerList(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL slayer_series_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
            
        }
    }

}

module.exports = { AdminManager };
