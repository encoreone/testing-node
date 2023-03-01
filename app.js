const express = require('express');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const qr = require('qrcode');
const multer = require('multer');
const port = process.env.port || 3500;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage }).single('file');

app.post('/upload', function(req, res) {
    upload(req, res, function(err) {
      if (err) {
        // Обработка ошибки
        return res.status(500).send(err + "jopa");
      }
      // Файл успешно загружен, можно производить его дальнейшую обработку
      res.status(200).send('File uploaded successfully');
      console.log("kek")
    });
});

app.get('/', (rec, res, next) => {
    res.render('index');
});

app.post('/download', (res, req) => {
    res.download('./public/docs')
})

// app.post('/qr', (req, res, next) => {
//     const input = req.get('host') + '/' + req.value;
//     console.log(input)
//     qr.toDataURL(input, (err, src) => {
//         res.render('qr', {
//             qr: src
//         })
//     })
// })

app.listen(port, console.log(`servers working on port ${port}`));