
module.exports = function sessions (req,res, next) {
        res.locals.session = req.session;
        res.locals.session.user = 'asdad';
        next();
}