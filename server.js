const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.static("public"))
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/images", express.static(__dirname + "/public/images"))

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log("Server started: %s", PORT)
})