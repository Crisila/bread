const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')


// SHOW
breads_router.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
    })
    } else {
        res.send('this index does not exist --> 404')
    }
  })
  


//index
breads_router.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
    //res.send(Bread)
})

//to export, anytime we have a file that we want to use elsewhere, we need to export it
module.exports = breads_router