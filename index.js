require("express-async-errors");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 2800;
const { rateLimiter, notFound, errorHandler } = require("./middlewares");
const { chatRouter } = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/chat", chatRouter);

//middleware
app.use(rateLimiter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
