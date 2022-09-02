require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('../routes/user')

const app = express()
app.use(express.json())

const password = '1GoZPeuoppIotaLF'
const cluster = 'my-first-cluster'
const dbname = 'dbOscar'

const dataBase = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(
            `mongodb+srv://${dbname}:${password}@${cluster}.bivp5.mongodb.net/?retryWrites=true&w=majority`,
            connectionParams
        )
        console.log('Connected successfully')
    } catch (error) {
        console.log(error)
    }
})

dataBase()

//routes
app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log('Server is running at port 3000')
})
