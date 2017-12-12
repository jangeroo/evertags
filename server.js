const express = require('express')
const app = express()

const config = require('./src/enOAuthConfig.json')
const Evernote = require('evernote');
var client = new Evernote.Client({ token: config.token });
var noteStore = client.getNoteStore()


const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
}
app.use(cors)


app.get('/', (req, res) => {
  res.send('Evertags API server!')
})

app.get('/tags', (req, res) => {
  noteStore.listTags()
    .then(tags => res.json(tags))
    .catch(error => console.log(error))
})

app.get('/notes', (req, res) => {
  if (!req.query.tagGuid) {
    res.json({
      code: 400,
      status: "Bad Request",
      message: "Missing tagGuid"
    })
  }
  let filter = new Evernote.NoteStore.NoteFilter({
    tagGuids: [req.query.tagGuid]
  })

  let spec = new Evernote.NoteStore.NotesMetadataResultSpec({
    includeTitle: true
  })

  noteStore.findNotesMetadata(filter, 0, 100, spec)
    .then(results => res.json(results.notes))
    .catch(error => console.log(error))

})

const PORT = 4000
app.listen(PORT, () => {
  console.log('Evertags server listening on port', PORT)
})
