import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongooes from "mongoose";
import bookRoute from "./Routes/book.route.js"


const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;

// connect to mongoDB
try {
    mongooes.connect(URI)
    console.log("Successfully connceted to mongoDB")
} catch (error) {
    console.log("Error: ",error)
}

// Defining Routes
app.use("/book",bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
