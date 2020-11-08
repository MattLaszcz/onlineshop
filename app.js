const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//const expressHbs = require('express-handlebars'); //imports express handlebars into the project.

const app = express();


//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/',defaultLayout: 'main-layout', extname: 'hbs'}));//initializes the handlebars engine with express
app.set('view engine', 'ejs');// sets the template engine to use pug
app.set('views','views'); //sets the location of the ejs files that the user will see, 'views' is the key understood by express and the second 'views' is the folder location in whichn they exist.

//const expressHandlebars  = require('express-handlebars');

/*app.engine('hbs', expressHandlebars({
    defaultLayout: '',
}));

app.set('view engine', 'hbs');
app.set('views', 'views');*/

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
