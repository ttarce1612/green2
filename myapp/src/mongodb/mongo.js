
// import mongodb from 'mongodb';

//lets require/import the mongodb native drivers.
var mongoose = require('mongoose')

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
// var url = 'mongodb://localhost:27017/testMrAn';

// Use connect method to connect to the Server
mongoose.connect('mongodb://localhost:27017/testMrAn');

var Product = mongoose.model('productList',{type:String,brand:String, size:Number, color:String ,price:Number});
var pro1 = new Product({type:'tivi',brand:'samsung', size:35, color:'red',price:500});
var pro2 = new Product({type:'condition',brand:'samsung', size:700, color:'red',price:8500});
var pro3 = new Product({type:'machine',brand:'samsung', size:400, color:'red',price:5020});
var pro4 = new Product({type:'smartphone',brand:'samsung', size:6, color:'red',price:1500});
[pro1,pro2,pro3,pro4].save(function(err, userObj){
    if(err){
        console.log(err)
    }else {
        console.log('saved successfull,',userObj)
    }
});