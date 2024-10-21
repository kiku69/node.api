import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.routes"

dotenv.config();

const PORT = process.env.PORT || 3006; 

const app = express()

app.use(express.json)

app.get("/", (request, response) => {
    response.json ({
        message: "hello from server",
    });
});

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
});