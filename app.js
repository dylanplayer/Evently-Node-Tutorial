const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 4000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', 
  (req, res) => {
    res.render('home');
  }
);

app.listen(PORT, 
  () => {
    console.log(`Evently listening on http://localhost:${PORT}/`);
  }
);
