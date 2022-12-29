const express = require('express')
const indexRoutes = require('./controller/index.route')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
require('./connection/database')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.use('/', indexRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} on port ${PORT}`)
)