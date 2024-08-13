const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')


// Routes
const authRoute = require('./routes/auth')
app.use("/auth", authRoute)

const userRoute = require('./routes/user')
app.use('/user', userRoute)



app.get('/', (req, res) => {
    try{
        res.json({message: "hello api"})
    }catch(err){
        res.send(err)
    }
})

// Database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cinexplore.3t8n5.mongodb.net/?retryWrites=true&w=majority&appName=cinexplore`)
.then(() => {
    console.log('Connected to MongoDB')
    const port = process.env.PORT
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
})
.catch(() => {console.log('Error in MongoDB Connection')})