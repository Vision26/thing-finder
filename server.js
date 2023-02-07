const express = require("express")
const app = express()
app.use(express.json())

app.use("/fruits", require("./routes/fruitRouter.js"))


app.listen(6000, () => {
    console.log(`Server is up and running on host 6000...`)
})