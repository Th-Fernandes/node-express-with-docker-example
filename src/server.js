const express = require('express')
const app = express()
const port = 3333

app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: "heelo world",
    status: "ok"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})