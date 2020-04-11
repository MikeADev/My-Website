var express = require('express');
var nodemailer = require('nodemailer');
var cors = require('cors');
var router = express.Router();
const creds = require('./config');

var transport = {
    service: 'Gmail',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages')
    }
});

router.post('/', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`;

    var mail = {
        from: `Contact Form - My Website`,
        to: 'mikearcherdev@gmail.com',
        subject: subject,
        text: content
    }

    transporter.sendMail(mail, (err) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/send', router);
app.listen(3002);