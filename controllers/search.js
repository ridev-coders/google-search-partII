// Packages
const express = require('express')
const app = require('../app')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
        // res.send('This is the Search Page')
        res.render('search')
    })
    // Export
module.exports = router