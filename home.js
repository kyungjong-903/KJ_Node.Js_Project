const express = require('express')
const app = express()
const port = 8080

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kyungjong:9dh4rud3whd6@nodejsproject-jntuj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!asdasdasdasd'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

