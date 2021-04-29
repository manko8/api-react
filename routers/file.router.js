const express = require('express')
const fileModel = require('../models/file.model')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const router = express.Router()


router.post('/', upload.single('picture'), (res,req) => {
    res.json({file: req.file})
})

module.exports = router

