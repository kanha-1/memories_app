const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./config/db");

// import routes
const postRoute = require('./routes/post')


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// use routes
app.use('/post',postRoute)
app.get("/", (req, res) => {
	res.send("hello world");
});
app.listen(PORT, () => {
	console.log(`Server running successfully http://localhost:${PORT}`);
});
