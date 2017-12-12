const express = require('express')
const app = express()

const config = require('./src/enOAuthConfig.json')
console.log(config)
const Evernote = require('evernote');
var client = new Evernote.Client({ token: config.token });
var userStore = client.getUserStore();


const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
}
app.use(cors)

app.get('/', (req, res) => {
  res.send('Evertags API server!')
})

app.get('/tags', (req, res) => {
  var noteStore = client.getNoteStore()
  noteStore.listTags()
    .then(tags => res.json(tags))
    .catch(error => console.log(error))
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
