const mysql = require('mysql2')
const abstract = require('./abstract')


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: abstract.password,
    database: 'employee'
  });


connection.connect((err)=>{
    if(err){
        console.log('Error' +err)
    }else{
        console.log('Connection Successful');
    }
})

module.exports = connection;