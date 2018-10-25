const app = require('express')();
const port = process.env.PORT || 5000;

require('./routes')(app);
app.listen(port, () => console.log(`Server start and Listening on port ${port}`));
