const express = require('express');
const app = express();
const dontenv = require("dotenv");
const mongoose = require('mongoose');
const routes = require("./routes");

const cors = require("cors");

dontenv.config();

const port = process.env.SERVER_PORT;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL);

app.use(express.json());

app.use('/public', express.static('public'));

app.use(cors());

app.use("/", routes);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
