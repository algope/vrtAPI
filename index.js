const readXlsxFile = require('read-excel-file/node');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// File path.
readXlsxFile('townsClean.xlsx').then((rows) => {
    rows.shift();

    app.get('/getRandomTown', function (req, res) {
        let rand = rows[Math.floor(Math.random() * rows.length)];
        let data = {"codINE":rand[0], "name":rand[1]};
        res.send(data);
    });

    app.listen(port, function () {
        console.log('Listening on port: '+port);
    });
});


