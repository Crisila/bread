require('dotenv').config()
//config
const PORT = process.env.PORT


const express = require('express')
const app = express()

//Dependencies
const methodOverride = require('method-override')

//middleware
app.use(methodOverride('_method')) // Part5: The app.use() function takes a callback, methodOverride(), which is a function we required in our dependencies. Next, we will pass the string that will trigger the method override.
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//define routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

// 404 Page --> need to be the last thing
app.get('*', (req, res) => {
    res.send('404')
  })
  


app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})



