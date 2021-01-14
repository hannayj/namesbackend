const express = require('express')
const app = express()

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

let names =  [
          {
            "name": "Ville",
            "amount": 24
          },
          {
            "name": "Anna",
            "amount": 6
          },
          {
            "name": "Antti",
            "amount": 22
          },
          {
            "name": "Sanna",
            "amount": 5
          },
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/names', (req, res) => {
    res.json(names)
})

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
