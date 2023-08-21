const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

dotenv.config();
connectDb();
const port = process.env.PORT || 5001;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/tasks", require("./routes/TaskRoutes"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
