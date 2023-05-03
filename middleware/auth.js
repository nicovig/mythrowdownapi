const jwt = require('jsonwebtoken');

const paramsConst = require('../paramsConst');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, paramsConst.getTokenKey());
        const role = decodedToken.role;        
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId,
            role: role
        }
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};