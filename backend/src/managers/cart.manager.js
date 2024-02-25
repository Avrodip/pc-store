const db = require("../config/database");

class CartManager {

    async getCartList(req, res) {
        try {
            const {
                userID
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getCartList(?)', [userID]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getProductByID(req, res) {
        try {
            const { id } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getProductByID(?)', [id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async getProductByArrayList(req, res) {
        try {
            const id = req;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getProductByID(?)', [id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async updateCart(req, res) {
        try {
            const {
                actionType,
                id,
                processor,
                motherBoard,
                ram,
                ramQuantity,
                graphicCard,
                hddQuantity,
                price,
                quantity,
                primaryStorage,
                secondaryStorage,
                casse,
                cpuCooler,
                psu,
                support,
                os,
                monitor,
                monitorQuantity,
                keyboard,
                mouse,
                wifi,
                customCable,
                userID,
                productType,
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().execute('CALL updateCart(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    actionType || null,
                    id || null,
                    processor || null,
                    motherBoard || null,
                    ram || null,
                    ramQuantity || null,
                    graphicCard || null,
                    hddQuantity || null,
                    price || null,
                    quantity || null,
                    primaryStorage || null,
                    secondaryStorage || null,
                    casse || null,
                    cpuCooler || null,
                    psu || null,
                    support || null,
                    os || null,
                    monitor || null,
                    monitorQuantity || null,
                    keyboard || null,
                    mouse || null,
                    wifi || null,
                    customCable || null,
                    userID || null,
                    productType || null,
                ]
            );
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
    async deleteCart(req, res) {
        try {
            const id = req.body.id;
            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().query('CALL deleteCart(?)', [id]);
            return rows;
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }
    }
}

module.exports = { CartManager };
