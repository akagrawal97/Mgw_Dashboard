const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express()
const PORT = process.env.PORT || 8080;
app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', (req, res) => {
    console.log('received request: '+JSON.stringify(req.body));
    res.send(req.body);
})

// const mongooseConnectionUri = <GET CONNECTION URL FORM MONGODB AFTER CREATING DATABASE IN MONGODB ATLAS>;
// console.log("mongooseConnectionUri: "+mongooseConnectionUri)
// mongoose.connect(mongooseConnectionUri, {useNewUrlParser: true})
// const mongooseConnection = mongoose.connection
// mongooseConnection.once('open', () => {
//     console.log("Mongoose connection successful")
// })


app.listen(PORT, (err) => {
    if(err)
    console.log(err)
    else
    console.log('Server started at port: ', PORT)
})