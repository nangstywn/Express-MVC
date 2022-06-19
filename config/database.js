import mysql from 'mysql';
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'express-mvc'
})
connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Koneksi Berhasil!');
    }
    })

    export default connection;
    // module.exports = connection;