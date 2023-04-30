require("dotenv").config();
const express = require("express");

const v1MovieRouter = require("./v1/routes/movieRoutes");

const app = express();
const PORT = process.env.PORT || 5500;

const connectDB = require("./database/connectDB");

app.get("/", (req, res) => {
    res.send({ status: 200, message: "API is live 🔥" });
});

app.use("/api/v1", v1MovieRouter);

const server = async () => {
    try {
        await connectDB(process.env.MONGO_DB_URL);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

server();
