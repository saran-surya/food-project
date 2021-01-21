const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');

// assigns
const app = express();


// middleware
app.use(bodyparser.json({limit: '16mb', extended: true}));
app.use(bodyparser.urlencoded({limit: '16mb', extended: true}))
app.use(cors());

// redirecting the routes to a different file for better readablity :)
app.use('/', routes)

// Loadin in the config variables
dotenv.config({
    path: './config.env'
})

const uri = process.env.URI

mongoose.connect(uri,{
    dbName:'food-project',
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('connected-to-atlas');
}).catch(err=>{
    console.log(err.message);
})

const port = process.env.PORT || 5000


if (process.env.NODE_ENV === 'production') {
    //console.log('in production')
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})