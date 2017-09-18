const express = require('express')
const mongoose = require('mongoose')
const routes = require('./server/routes')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);

const bodyParser = require('body-parser')

mongoose.connect( process.env.MONGOLAB_URL||'mongodb://localhost:27017/votingapp')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser('keyboard cat'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
 
}))

app.use(passport.initialize());
app.use(passport.session())
app.use(routes)



app.route('*').get((req,res)=>{
  res.sendFile(path.join(__dirname+'/client/public/index.html'))
})
const port = process.env.PORT||4000
app.listen(port,()=>{
console.log('app listening od port' + port)
})