var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.json([
    {"guid":"ca66549d-66f1-41eb-ae70-3e97a855851e","name":"Documents"},
    {"guid":"ca66549d-66f1-41eb-ae70-3e97a855851f","name":"Documents2"},
  ])
})

module.exports = router
