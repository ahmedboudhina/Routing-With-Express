const express = require ('express');
// const moment =require ('moment')

const app=express()
app.use(date=(req,res,next)=>{
let hour = new Date().getHours()
let minute = new Date().getMinutes()
if(hour>17 || hour<08)
res.send("Our office is not open now")
else
next()
// let x=[]
// x[0]=moment().format('hh')
// x[1]=moment().format('mm')
//     if(Number(x[0])> 08)
// res.send("Our office is not open now")
// else next()
})

app.use(express.static(__dirname+'/public'))


// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname+'/public/home.html')
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/public/contact.html')
// })


app.listen(3000,(err)=>{
    if(err) console.log('server not running');
    else console.log('server is running on port 3000...')
})