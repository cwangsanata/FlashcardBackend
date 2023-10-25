const express = require("express")
const app = express()

var cors = require('cors')
app.use(cors())

// Require dotenv so we can use environment variables (rather not upload a password to GitHub)
require("dotenv").config()

// QUESTION 1. Import mongoose
const mongoose = require("mongoose")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connect().catch(err => console.log(err))

async function connect() {
  await mongoose.connect(process.env.MONGO_URL) // QUESTION 2. Paste your connection string here, but replace <password> with your password.
  console.log("Successfully connected to MongoDB")
}

// QUESTION 3. Create a new mongoose.Schema here with the front as a String and the back as a String. 
const flashcardSchema = mongoose.Schema( {
    front: String,
    back: String
} )

// QUESTION 4. Create a new mongoose.model with the collection name 'Flashcard' as the first argument. What should the second argument be?
const Flashcard = mongoose.model("Flashcard", flashcardSchema)

app.post("/new", async (req, res) => {
    // QUESTION 5. Create a new Flashcard with the front as req.body.front and back as req.body.back
    // Check out the lecture slides if you are stuck!
    const newCard = new Flashcard({
        front: req.body.front,
        back: req.body.back
    })
    
    //QUESTION 6. Save newCard to the database using the .save() method. Remember that this function is asynchronous!
    await newCard.save()
    res.json(newCard)
})

// QUESTION 5. Use a mongoose method to find all the cards we have in our database.
// Check out the lecture slides, specifically slide 28! Don't forget the await keyword.
app.get("/cards", async (req, res) => {
    let id = req.params.id
    const foundCards = await Flashcard.find()
    res.send(foundCards)
})

// QUESTION 6. Use a mongoose method to find a card by its id.
// Check out the lecture slides, specifically slide 28! Don't forget the await keyword.
app.get("/card/:id", async (req, res) => {
    let id = req.params.id
    const foundCard = await Flashcard.findById(id)
    res.send(foundCard)
})

// QUESTION 6. Use a mongoose method to delete a card by its id.
// Try googling what this could be first!
// Hint: https://www.geeksforgeeks.org/mongoose-queriesmodel-findbyidanddelete-method/ (Scroll to syntax and only use the first 'id' parameter)
// Hint: Don't forget the await keyword.
app.get("/delete/:id", async (req, res) => {
    let id = req.params.id
    const foundCard = await Flashcard.findByIdAndDelete(id)
    res.send(foundCard)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})