const deleteAutorization  = (req, res, next) => {
    if (req.headers.authorization === 'X-Password qwerty') {
        next();
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    deleteAutorization
};