const express = require("express")
const fruitRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const fruits = [
    {
        type:"banana",
        color:"yellow",
        daysOld:3,
        taste:"good",
        _id:uuidv4()
    },

    {
        type:"apple",
        color:"yellow",
        daysOld:6,
        taste:"good",
        _id:uuidv4()
    },

    {
        type:"papaya",
        color:"orange",
        daysOld:10,
        taste:"bad",
        _id:uuidv4()
    },

    {
        type:"Gala Apple",
        color:"orange",
        daysOld:4,
        taste:"good",
        _id:uuidv4()
    },

    {
        type:"Peach",
        color:"yellow",
        daysOld:3,
        taste:"bad",
        _id:uuidv4()
    }
]

fruitRouter.get("/", (req, res) => {
    res.send(fruits)
})

fruitRouter.get("/:fruitsId", (req, res) => {
    const fruitsID = req.params.fruitsId
    const setID = fruits.find(fruit => fruit._id === fruitsID)
    res.send(setID)
})

fruitRouter.get("/fruit/taste", (req, res) => {
    const fruitQuery = req.query.taste
    const filterFruits = fruits.filter(frut => frut.taste === fruitQuery)
    res.send(filterFruits)
})

fruitRouter.post("/", (req, res) => {
    const fruitBody = req.body
    fruitBody._id = uuidv4()
    fruits.push(fruitBody)
    res.send(`SUCCESS: ${fruitBody.type} P O S T E D!`)
})

fruitRouter.delete("/:fruitsId", (req, res) => {
    const fruitsParam = req.params.fruitsId
    const fruitsIndex = fruits.findIndex(frt => frt._id === fruitsParam)
    fruits.splice(fruitsIndex, 1)
    const fruitDel = req.body
    res.send(`DELETED!`)
})

fruitRouter.put("/:fruitsId", (req, res) => {
    const frtParams = req.params.fruitsId
    const frtIndex = fruits.findIndex(frts => frts._id === frtParams)
    const frtObject = Object.assign(fruits[frtIndex], req.body)
    res.send(frtObject)
})
module.exports = fruitRouter