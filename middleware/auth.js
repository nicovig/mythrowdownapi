const jwt = require('jsonwebtoken');

const paramsConst = require('../paramsConst');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, paramsConst.getTokenKey());
        const userId = decodedToken.userId;
        req.auth = {
            userId
        };
    } catch (error) {
        res.status(401).json({ error });
    }
};