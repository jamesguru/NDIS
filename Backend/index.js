const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

const PORT=process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`)
})