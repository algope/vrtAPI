const readXlsxFile = require('read-excel-file/node');
const express = require('express');
const app = express();

// File path.
readXlsxFile('townsClean.xlsx').then((rows) => {
    console.log(rows[0]);
    rows.shift();

    app.get('/getRandomTown', function (req, res) {
        let rand = rows[Math.floor(Math.random() * rows.length)];
        let data = {"codINE":rand[0], "name":rand[1]};
        res.send(data);
    });

    app.listen(3000, function () {
        console.log('Listening on port 3000!');
    });
});


