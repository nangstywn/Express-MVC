import express from "express";
import path from "path";
import connection from "./config/database.js";
import methodOverride from "method-override";
import router from "./routes/booksRouter.js";
const __dirname = path.resolve();
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next){
    req.connection = connection;
    next();
})

// parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//routing
app.use('/books', router);


// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})