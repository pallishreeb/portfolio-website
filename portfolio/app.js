const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require("body-parser")
const nodemailer = require('nodemailer');


app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/',(req,res,next)=>{ 
    console.log('hii')
 res.sendFile(path.join(__dirname,'public','main.html'));

});

app.get('/contact',(request,response,next)=>{ 
  console.log('hii')
response.sendFile(path.join(__dirname,'public','contact.html'));

});

app.post('/contact',(request,response)=>{
  const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465, //secure port
    auth:{
      user:"abcd@gmail.com",//your company email
      pass:"abcd@2020" //your password
    }
  });
  var textBody = `FROM : ${request.body.name}; EMAIL: ${request.body.email}; MESSAGE: ${request.body.message};`
  var htmlBody = `<h2>Mail from contact Form</h2><p>from: ${request.body.name}Email:${request.body.email}Phone:${request.body.number}Message:${request.body.message} `
  var mail = {
    form: "abcd@gmail.com",//your company email
    to: "xyz@gmail.com",//your email
    subject:"mail from contact form",
    text: textBody,
    html: htmlBody

  };
  transporter.sendMail(mail, function(err, info){
    if(err){
      console.log(err);
      response.json({message: "an error occured; check the server's console"});
    }
    else{
      response.json({message:`message sent with ID: ${info.messageid}`})
    }
  });
});



   


app.listen(8000,function(){
    console.log('server connected');
});