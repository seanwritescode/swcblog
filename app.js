var middleware = require('./server/app-middleware.js');

// Constants
var PORT = 3000;

// App
var app = middleware();
app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
