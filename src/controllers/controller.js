import conn from '../database/connection.js';
const controllers = {};

controllers.list =  (req, res) => {
    // res.send('Hello World!!!');
    const [rows, fields] = conn.query('SELECT * FROM customer');
    if (rows.length > 0){
        console.log(rows[0]);
        res.render('customer');
    }

}

export default controllers;