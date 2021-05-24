const express = require('express')
const router = express.Router()
const {post} = require("../controller/postController")
router.get("/",post)

module.exports = router;