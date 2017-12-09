const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Evertags API server!')
})

app.get('/tags', (req, res) => {
  res.json(mockTags)
})

const PORT = 4000
app.listen(PORT, () => {
  console.log('Evertags server listening on port', PORT)
})


mockTags = [
  {
    'updateSequenceNum': '01',
    'guid': 'tag_001',
    'name': '#booya',
    'parentGuid': null,
  },
  {
    'updateSequenceNum': '02',
    'guid': 'tag_001',
    'name': '#wahoo',
    'parentGuid': null,
  },
  {
    'updateSequenceNum': '03',
    'guid': 'tag_003',
    'name': '#BAM',
    'parentGuid': 'tag_001',
  },
]
