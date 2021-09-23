const express = require("express");
const app = express();
// const router=express.Router();
app.listen("5000", function () {
  console.log("server listening on port 5000");
});

app.use(express.json());
let user = ["a1"];
app.use(express.static("public"));

const userRouter = require("./Routers/userRouter");
let authRouter = require("./Routers/authRouter");

app.use("/auth", authRouter);
app.use("/user", userRouter); 




// home page
// app.get("/", (req, res) => {
//   res.send("home page");
// });


// redirects
// app.get("/user-all", (req, res) => {
//   res.redirect("/user");
// });

// 404 page
// app.use((req, res) => {
//   res.sendFile("public/404.html", { root: __dirname });
// });
