const express = require('express')

const app = express()

app.get('/api/helloworld', (req, res) => {
  res.json({ sayHi: 'hello from server, nice to meet you!' })
})

app.get('/', (req, res) => {
  res.send('hello from server!')
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})

