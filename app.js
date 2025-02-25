const express = require('express');
const indexRouter = require("./routes/indexRouter");
const path = require('path');
const router = require('./routes/indexRouter');


const app = express();
const PORT = 5000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));



app.use("/", indexRouter);



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});