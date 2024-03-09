const db = require("../config/database");

class ProcessorManager {

    async getPcPredatorDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getPcPredatorDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getPcKrakenDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getPcKrakenDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getPcBehemothDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getPcBehemothDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getPcSlayerDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getPcSlayerDetails(?)', [cpu_id]);
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

            const [rows, fields] = await db.promise().query('CALL getGamingCpuList(?)', [type_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    
    async getWorkstationCpuList(req, res) {wer
        try {
            const type_id = req.body.type_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL getWorkstationCpuList(?)', [type_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }


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

    async getPcEditingDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL getPcEditingDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getPcAIDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL getPcAIDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getPcTradingDualDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL getPcTradingDualDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }

    async getPcTradingFourDetails(req, res) {
        try {
            const cpu_id = req.body.cpu_id;

            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL getPcTradingFourDetails(?)', [cpu_id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
}

module.exports = { ProcessorManager };