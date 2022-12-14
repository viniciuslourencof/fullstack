import express from "express"
import userRoutes from "./routes/users.js"
import equipeRoutes from "./routes/equipe.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)
app.use("/", equipeRoutes)

app.listen(8800)