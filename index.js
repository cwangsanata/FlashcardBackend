const express = require("express")
const app = express()

var cors = require('cors')
app.use(cors())

// QUESTION 1. Import mongoose
const mongoose = /* YOUR CODE HERE */

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connect().catch(err => console.log(err))

async function connect() {
  await mongoose.connect(/* YOUR CODE HERE */) // QUESTION 2. Paste your connection string here, but replace <password> with your password.
  // Don't forget the quotation marks! Do not include the triangle brackets <> around your password.
  // It should look something like this: "mongodb+srv://jessican1212:my_password@cluster0.5fwyzvq.mongodb.net/"
  console.log("Successfully connected to MongoDB")
}

// QUESTION 3. Create a new mongoose.Schema here with the front as a String and the back as a String. 
const flashcardSchema = /* YOUR CODE HERE */

// QUESTION 4. Create a new mongoose.model with the collection name 'Flashcard' as the first argument. What should the second argument be?
const Flashcard = /* YOUR CODE HERE */

app.post("/new", async (req, res) => {
    // QUESTION 5. Create a new Flashcard with the front as req.body.front and back as req.body.back
    // Check out the lecture slides if you are stuck!
    const newCard = /* YOUR CODE HERE */
    
    /* YOUR CODE HERE */ //QUESTION 6. Save newCard to the database using the .save() method. Remember that this function is asynchronous!
    res.json(newCard)
})

// QUESTION 5. Use a mongoose method to find all the cards we have in our database.
// Check out the lecture slides, specifically slide 28! Don't forget the await keyword.
app.get("/cards", async (req, res) => {
    let id = req.params.id
    const foundCards = /* YOUR CODE HERE */
    res.send(foundCards)
})

// QUESTION 6. Use a mongoose method to find a card by its id.
// Check out the lecture slides, specifically slide 28! Don't forget the await keyword.
app.get("/card/:id", async (req, res) => {
    let id = req.params.id
    const foundCard = /* YOUR CODE HERE */
    res.send(foundCard)
})

// QUESTION 6. Use a mongoose method to delete a card by its id.
// Try googling what this could be first!
// Hint: https://www.geeksforgeeks.org/mongoose-queriesmodel-findbyidanddelete-method/ (Scroll to syntax and only use the first 'id' parameter)
// Hint: Don't forget the await keyword.
app.get("/delete/:id", async (req, res) => {
    let id = req.params.id
    const foundCard = /* YOUR CODE HERE */
    res.send(foundCard)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})