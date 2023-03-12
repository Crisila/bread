require('dotenv').config()
//config
const PORT = process.env.PORT


const express = require('express')
const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//define routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})



