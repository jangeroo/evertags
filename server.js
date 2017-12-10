const express = require('express')
const app = express()

const Evernote = require('evernote');
var client = new Evernote.Client({ token: "S=s1:U=91d19:E=167821b5a16:C=1602a6a2aa8:P=1cd:A=en-devtoken:V=2:H=2e45e5c070baf4f3980f7c351f64de1e" });
var userStore = client.getUserStore();
// userStore.getUser().catch(error => console.log(error))
userStore.getUser()
  .then(user => console.log(user))
  .catch(error => console.log(error))
var noteStore = client.getNoteStore()
noteStore.listTags()
  .then(tags => console.log(tags))
  .catch(error => console.log(error))








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
