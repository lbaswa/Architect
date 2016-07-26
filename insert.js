/**
 * http://usejsdoc.org/
 */
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var path=require('path');
//var google = require("googleapis");

//var localstorage = 
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res)
{
    res.sendFile(__dirname +'/'+'Home.html');
          
})

/*app.get('/',function(req,res)
{
    res.sendFile(__dirname +'/'+'CRegister.html');
          
})

*/

app.post('/insert',function(req,res)
{
    var MongoClient=require("mongodb").MongoClient;
   response={
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        pwd:req.body.pwd
        
    };
   console.log(response);
    MongoClient.connect("mongodb://localhost:27017/Architectcloud",function(err,db)
    {
        if(!err)
        {
            console.log("Connected Successfully");
        }
        else
        {
            console.log("Not Connected Successfully")
        }
        
        db.collection("reg").insert(response,function(err,records)
        {
            if(!err)
            {
               
                //console.log("Record Inserted Successfully");
                res.redirect('/CRegister.html');
            }
            else
            {
                
                console.log("not inserted");
                res.send("error");
            }
           db.close(); 
        });
        
    });
   console.log("Welcome");
   });

//var data = localstorage.setItem('myMainkey');
//if(data!==undefined){
	
//}
var server=app.listen(8082,function()
{
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at 8082")
})


