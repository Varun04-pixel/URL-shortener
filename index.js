import express from "express";
import "dotenv/config";
import urlRoute from "./Routes/urlRoute.js";
import connectToDB from "./Database/data.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("Public"));
app.use(urlRoute);

connectToDB();

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
