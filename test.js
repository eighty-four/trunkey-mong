const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
    res.send('Herro warudo!');
});

app.listen(6969, () => console.log("Runnin..."));