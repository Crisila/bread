const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

// show route
breads_router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})


//index
breads_router.get('/', (req, res) => {
    res.render('index', {breads: Bread})
    //res.send(Bread)
})

//to export, anytime we have a file that we want to use elsewhere, we need to export it
module.exports = breads_router