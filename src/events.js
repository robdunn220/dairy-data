const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.post('/event', (req, res, next) => {
        db.query(
            'INSERT INTO dairy_data_db (heifer_id, age, weight) VALUES (?,?,?)',
            [req.body.heifer_id, req.body.age, req.body.weight],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.get('/event', function (req, res, next) {
        db.query(
            'SELECT id, heifer_id, age, weight FROM dairy_data_db',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;