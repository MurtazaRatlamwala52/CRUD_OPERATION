const express = require('express')
const { connect } = require('./models/data')
const connection = require('./models/data')
const app = express()
app.use(express.json())


app.post('/', (req,res) => {
    const emp = req.body;
    var empData = [emp.id, emp.name, emp.phone]
    connection.query('INSERT INTO emp values(?)',[empData], function(err, data){
        if(err){
            res.send(err)
                
        }else{
             res.send(data)       
        }
    })
})

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM emp', function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data)
        }
    })
})

app.delete('/:id',(req,res)=>{
    const id = req.params.id
    connection.query('DELETE FROM emp WHERE id = ?',[id], (err,data)=>{
        if(err){
            res.send('Error ', +err)
        }else{
            res.send(data)
        }
    })
})

app.put('/:id', (req, res) => {
    const emp = req.body;
    const id = req.params.id;
    const empData = [emp.phone, emp.name, id];
    
    connection.query('UPDATE emp SET name = ?, phone = ? WHERE id = ?', empData, (err, data) => {
      if (err) {
        res.send('Error ' + err);
      } else {
        res.send(data.affectedRows);
      }
    });
  });

app.listen('5253',  () => {
    console.log("Listening on port 5253")
})