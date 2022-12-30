import conn from '../database/connection.js';
const controllers = {};

controllers.list =  (req, res) => {
    // res.send('Hello World!!!');
    conn.query('SELECT * FROM customer', (err, row) => {
        if (err) {
            res.json(err);
        }
        console.log("🚀 ~ file: controller.js:7 ~ conn.query ~ row", row);
        res.render('customer');
    })
}

export default controllers;