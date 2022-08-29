import express from "express"
import dotenv from "dotenv"
import colors from "colors"
// import products from "./data/products.js"
import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

dotenv.config()
connectDB()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running..")
})

app.use("/api/products", productRoutes)

// app.get("/api/products", (req, res) => {
//   res.json(products)
// })

// app.get("/api/product/:id", (req, res) => {
//   const product = products.find((item) => item._id === req.params.id)
//   res.json(product)
// })

// use to check API URL if correct
app.use(notFound)
// Use to check specific id in API URL if correct
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} on port ${PORT}`.magenta.underline
      .bold
  )
)
