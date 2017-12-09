const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Evertags API server!')
})

app.get('/tags', (req, res) => {
  res.json({ 'tag': 'booyah' })
})

const PORT = 4000
app.listen(PORT, () => {
  console.log('Evertags server listening on port', PORT)
})
