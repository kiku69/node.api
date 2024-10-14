import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = import.meta.PORT 

const app = express()

app.get("/", (request, response) => {
    response.json ({
        message: "hello from server"
    })
})

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:$(PORT)`)
})