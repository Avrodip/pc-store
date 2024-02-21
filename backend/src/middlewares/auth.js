const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

router.post('/validateToken', (req, res) => {
    const { token } = req.body;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ valid: true });
    } catch (error) {
        // Token is invalid
        res.status(401).json({ valid: false });
    }
});

module.exports = router;