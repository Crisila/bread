const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

//NEW
breads_router.get('/new', (req, res) => {
    res.render('new')
})

// EDIT
breads_router.get ('/:arrayIndex/edit', (req, res) => {
    res.render('edit', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })

})

// SHOW
///:arrrayIndex is almost the same as the wildcard
breads_router.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })
    } else {
        res.send('this index does not exist --> 404')
    }
  })

//   UPDATE
breads_router.put ('/:arrayIndex', (req, res) => {
        req.body.hasGluten = req.body.hasGluten === 'on'
        Bread[req.params.arrayIndex] = req.body
        res.redirect(`/breads/${req.params.arrayIndex}`)

})




//index
breads_router.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
    //res.send(Bread)
})


// Create with modified coding
breads_router.post ('/', (req, res) => {
    if (!req.body.image) { //req.body.image === fales || req.body.image === ""
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
        req.body.hasGluten = req.body.hasGluten === 'on'

    // if (req.body.hasGluten === 'on') {
    //     req.body.hasGluten = 'true'
    // } else {
    //     req.body.hasGluten = 'false'
    // }
    Bread.push(req.body)
    // res.send(Bread)
    res.redirect('/breads')
})

// // CREATE OG coding
// breads.post('/', (req, res) => {
//     if (!req.body.image) {
//       req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
//     }
//     if(req.body.hasGluten === 'on') {
//       req.body.hasGluten = true
//     } else {
//       req.body.hasGluten = false
//     }
//     Bread.push(req.body)
//     res.redirect('/breads')
//   })
  



//PART 5
//We need to create a new route that will delete a specific bread when reached. In our app, we will simply add a delete button to each show page, but first we will start by writing our route and testing with Postman.

//Delete
//splice take indexArray and removes some num of items before or after ==> 1 because we're removing 1 item from our array
breads_router.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})


//to export, anytime we have a file that we want to use elsewhere, we need to export it
module.exports = breads_router
