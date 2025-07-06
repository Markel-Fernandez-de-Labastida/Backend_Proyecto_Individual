const verifyRole = (requiredRole) => (req, res, next) => {
    console.log("Verificar rol: req.user: ", req.user);
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
    }
    next();
};

module.exports = {
    verifyRole
};