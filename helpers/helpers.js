const roles = require('../config/role_list');

function isSuperAdminAuthorized(req) {
    const role = req.auth.role;
    if (roles[role] === 0) {
        return true;
    }
    return false;
};

function isAdminAuthorized(req) {
    const role = req.auth.role;
    if (roles[role] <= 1) {
        return true;
    }
    return false;
};

function isUserAuthorized(req) {
    const role = req.auth.role;
    if (roles[role] <= 2) {
        return true;
    }
    return false;
};

module.exports = { isSuperAdminAuthorized, isAdminAuthorized, isUserAuthorized };