import express from "express";
const app = express();
import "dotenv/config";

app.get("/", (req, res) => {
  res.send("helllo world");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "Joke one", description: "this is joke one" },
    { id: 2, title: "Joke two", description: "this is joke two" },
    { id: 3, title: "Joke three", description: "this is joke three" },
    { id: 4, title: "Joke four", description: "this is joke four" },
    { id: 5, title: "Joke five", description: "this is joke five" },
  ];

  res.send(jokes);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is runnig on port ${port}`);
});
