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
    async  insert_gaming_predator(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_gaming_predator(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }

    async  insert_gaming_kraken(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_gaming_kraken(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async  insert_gaming_behemoth(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_gaming_behemoth(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async  insert_gaming_slayer(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_gaming_slayer(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async  insert_trading_four_monitor(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_trading_four_monitor(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async  insert_trading_dual_monitor(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_trading_dual_monitor(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async  insert_workstation_ai(req, res) {
        try {
            const { cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            
            const [rows, fields] = await db.promise().query('CALL insert_workstation_ai(?, ?, ?, ?, ?, ?, ?)', [cpu_name, gpu_name, ram_name, motherboard_name, storage_name, cooler_name, cabinet_name]);
            console.log(rows)
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async workstation_trading_dual_monitor_details(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL workstation_trading_dual_monitor_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
            
        }
    }
    async workstation_trading_four_monitor_details(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL workstation_trading_four_monitor_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
            
        }
    }
    async workstation_ai_series_details(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL workstation_ai_series_details()');
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
            
        }
    }
}

module.exports = { AdminManager };
