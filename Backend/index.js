const express = require("express");

const cors = require("cors");

const menus = [
    {
        "id":1,
        "name": "Chicken",
        "pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfyBchqcdxZiNwJe8bNEu30PDPatnlhGZ7Q&usqp=CAU",
        "Details": "Grilled Chicken served with french fries",
        "Price":4,
    },
    {
        "id":2,
        "name": "Burger",
        "pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvX295G76syoZlcsuQKSHY_I4Sqq8cTHM2MA&usqp=CAU",
        "Details": "Beef Burger served with french fries",
        "Price":3
    },
    {
        "id":3,
        "name": "Pizza",
        "pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlX6uX1qqHSD06obDC4gnZ9dzEgUdm5K-6A&usqp=CAU",
        "Details": "Margarita Pizza with strawberry",
        "Price":7
    },
]



const app = express();
const PORT = 3001;

app.use(cors());

app.get("/menus", (req, res)=> {
    res.send(menus)
})

app.get("/menus/:foodId", (req, res)=> {
   var id= req.params.foodId;

   console.log(id, "my id")

   const food = menus.filter((menu) => {
        return menu.id === id
   })
    console.log(food)
})

app.listen(PORT)