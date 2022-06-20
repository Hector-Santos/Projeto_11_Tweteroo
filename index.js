import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = {};
let tweets = [

];

app.post("/sign-up", (req, res) => {

    user = req.body;
    console.log(user);
    
    res.send("ok");
});

app.post("/tweets", (req, res) => {

    let tweet = {
       username: user.username,
       avatar: user.avatar,
       tweet : req.body.tweet
    }

    tweets.push(tweet)
    
    res.send("ok");
});

app.get("/tweets", (req, res) => {
    let resposta = [...tweets].reverse()
    if (tweets.length > 10)
    resposta = [...tweets].reverse().slice(0,10)

    res.send(resposta);
});


app.listen(5000);