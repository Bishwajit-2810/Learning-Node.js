const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
});
app.get("/bk", (req, res) => {
    res.send("<h1>Hello BK!</h1>")
});
app.get("/good_morning", (req, res) => {
    res.send("<h1>GOOD MORNING!</h1>")
});
app.get("/good_night", (req, res) => {
    res.send("<h1>GOOD NIGHT</h1>")
});
app.get("/hello",(req,res)=>{
    var helo={
        name: 'hello',
        date: "2024-02-13",
        is_morning: true
    
    }
    res.send(helo);
});


app.listen(3000,()=>{
    console.log("server is live");
});