const db = require("../config/database");

class CartManager {

    async getCartList(req, res) {
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().query('CALL getCartList()');
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
                user,
                productType,
            } = req.body;
            if (!db) {
                throw new Error("Database object is undefined");
            }

            const [rows, fields] = await db.promise().execute('CALL updateCart(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
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
                    user,
                    productType,
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
