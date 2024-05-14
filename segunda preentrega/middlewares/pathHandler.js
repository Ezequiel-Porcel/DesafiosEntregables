// middlewares/pathHandler.js
function pathHandler(req, res, next) {
    res.status(404).json({ message: 'Not Found' });
}

module.exports = pathHandler;
