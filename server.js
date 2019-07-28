const express = require('express');
const path = require('path');

var app = express();
const port = 3000;
var mysql = require('mysql'); 
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: '',
    signatureVersion: 'v4',
    region: 'ap-south-1'
});

// var con = mysql.createConnection({
//     host: '',
//     user: '',
//     password: ''
// });

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.static('public'));

//fetch todos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/login.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});


app.get('/products', (req, res) => {
    var sql =
        "SELECT * FROM awscour.product";
    
    const myBucket = 'ecom1024';
    const myKey = 'hp.jpg';
    const signedUrlExpireSeconds = 60 * 5;
    
    try {
        con.query(sql, async function(err, result, fields) {
            if (err) throw err;
            var resp = [];
            var count = 1;
            Object.keys(result).forEach(function(key) {
                // const myKey = count+'.jpg';
                // const url = s3.getSignedUrl('getObject', {
                //     Bucket: myBucket,
                //     Key: myKey,
                //     Expires: signedUrlExpireSeconds
                // });
                // result[key]['img'] = url;
                resp.push(result[key]);
                count++;
            });
            res.status(200).send({resp,status:"OK"});
        });
    } catch (err) {
        res.redirect('/error');
    }
});

app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/error.html'));
});

app.post('/user', (req, res) => {
    console.log(req.body);
    var sql =
        "SELECT * FROM awscour.user where email='" +
        req.body.email +
        "' and password='" +
        req.body.password+
        "'";
    try
    {
        con.query(sql, async function(err, result, fields) {
            if (err) throw err;
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                if(row.email == req.body.email){
                    res.redirect('/home');
                }
            }); 
            res.redirect('/error');
        });
    }
    catch(err){
        res.redirect('/error');
    }
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log('SQL Connected!');
    // });
});

module.exports = {
    app
};
