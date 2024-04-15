const express = require("express");
const app = express();
const authRoute = require("./router/user-router")
const cors = require("cors")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");


const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions))

app.use(express.json())
app.use("/api/auth",authRoute)
// app.use("api/form",userInfoRoute);


app.use(errorMiddleware)

const PORT = 27017
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`)
    })
});

