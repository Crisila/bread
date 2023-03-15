require('dotenv').config()
//config
const PORT = process.env.PORT


const express = require('express')
const app = express()

//middleware

app.use(express.static('public'))

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



