const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.post('/login', async (req, res) => {

    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    // res.cookie('name', 'Asif', {httpOnly: true});
    res.status(200).send('logged IN Successfully');
});

app.listen(5000, () => {
    console.log('App Started');
});