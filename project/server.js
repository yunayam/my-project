const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const testRoute = require("./routes/test");
const PORT = 3001;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGOURL)
.then(() => {
   console.log("DBと接続中。。。");
}).catch((err) => {
   console.log(err);
});


app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);


app.listen(PORT, () => console.log("サーバーが起動しました"));