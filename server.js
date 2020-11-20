const mongoose = require("mongoose");
const Box = require("./models/box.js");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BoxSet", { useNewUrlParser: true });

boxes = [
    {
        Name: "Stoner Box",
        Price: 100,
        Category: "Box Sets",
        Img_url: "Image/GoodWeed.png"
    },
    {
        Name:"Stressed-Out Pro Box",
        Price: 75,
        Category: "Box Sets",
        Img_url: "Image/BadWeed.png"
    },
    {
        Name: "Creative Box",
        Price: 150,
        Category: "Box Sets",
        Img_url: "Image/UncleSkunker.png"
    }
]

Box.collection.insertMany(boxes)
.then(BoxSet => {
    console.log(BoxSet);
})
.catch(({ message}) => {
    console.log(message)
});


