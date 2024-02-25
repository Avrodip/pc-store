const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();
const db = require("../config/database");
let userID = null;
let totalamount = null;
let billingID = null;
let shippingID = null;
exports.checkout = async (req, res) => {
    console.log("Resqwfgf ", req.body)
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET
    });
    userID = req.body.userID;
    totalamount = req.body.Totalamount;
    billingID = re.body.billingID;
    shippingID = req.body.shippingID;
    const options = {
        amount: Number(req.body.amount),
        currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json({
        success: true,
        order,
    });
};

exports.verification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Construct the string to verify
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    if (razorpay_signature === expectedSignature) {
        // Payment verification is valid
        try {
            if (!db) {
                throw new Error("Database object is undefined");
            }
            const [rows, fields] = await db.promise().execute('CALL updateOrders(?, ?, ?, ?,?,?,?)',
                [
                    razorpay_order_id,
                    razorpay_payment_id,
                    razorpay_signature,
                    totalamount,
                    billingID,
                    shippingID,
                    userID || null,
                ]
            );
            // res.status(200).send({
            //     message: `Payment verification is valid ${razorpay_order_id}`,
            //     redirectUrl: "http://localhost:5173/",
            // });
            res.redirect(`http://localhost:5173/my-orders/${razorpay_order_id}`)
        } catch (error) {
            console.error("Error occurred:", error);
            throw error;
        }

    } else {
        // Payment verification is not valid
        res.status(400).send("Payment verification is not valid");
    }
};