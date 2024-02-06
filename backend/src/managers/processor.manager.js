const db = require("../config/database");

class ProcessorManager {

    async getGamingPcDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getPcDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }

    async getGamingCpuList(req, res) {
        try {
            const type_id = req.body.type_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getCpuList(?)', [type_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
}

module.exports = { ProcessorManager };
