const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
const nodemailer = require("nodemailer")

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
const bcrypt = require('bcrypt')

app.use('/', serveStatic(path.join(__dirname, '/dist')))

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gdlyeabkov@gmail.com',
        pass: 'myreversepassword'
    }
})

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/employee?retryWrites=true&w=majority`;

var options = {
    root: path.join(__dirname, 'views'),
}   

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    const EmployeeSchema = new mongoose.Schema({
        content: String,
        sender: String,
        mailclient: String,
        created: {
            type: Date,
            default: Date.now
        },
    }, { collection : 'myemployees' });

    const EmployerSchema = new mongoose.Schema({
        name: String,
        secondName: String,
        phone: String,
        email: String,
        password: String,
        company: String,
        region: String,
    }, { collection : 'myemployers' });

    const EmployerModel = mongoose.model('EmployerModel', EmployerSchema);

const AspirantSchema = new mongoose.Schema({
    feedback: String
}, { collection : 'myaspirants' });

const AspirantModel = mongoose.model('AspirantModel', AspirantSchema);

const ResumeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    secondName: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    born: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    citizenship: {
        type: String,
        default: ''
    },
    experience: {
        type: String,
        default: ''
    },
}, { collection : 'myresumes' });

const ResumeModel = mongoose.model('ResumeModel', ResumeSchema);
    

app.get('/api/employee', (req, res)=>{
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.json({ status: 'OK' })

})

app.get('/api/employers/check', (req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = EmployerModel.find({ email: { $in: req.query.employeremail }  })
    queryBefore.exec((err, allEmployers) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allEmployers.length >= 1){
            let query =  EmployerModel.findOne({'email': req.query.employeremail}, function(err, employer){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.employerpassword, employer.password) && req.query.employerpassword !== ''
                    if(employer != null && employer != undefined && passwordCheck){
                        return res.json({ "status": "OK", "employer": employer })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allEmployers.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})

app.get('/api/aspirants/check', (req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = AspirantModel.find({ email: { $in: req.query.aspirantemail }  })
    queryBefore.exec((err, allAspirants) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allAspirants.length >= 1){
            let query =  AspirantModel.findOne({'email': req.query.aspirantemail}, function(err, aspirant){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.aspirantpassword, aspirant.password) && req.query.aspirantpassword !== ''
                    if(aspirant != null && aspirant != undefined && passwordCheck){
                        return res.json({ "status": "OK", "aspirant": aspirant })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allAspirants.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})


app.get('/api/aspirants/create', (req, res)=>{
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = AspirantModel.find({})
    query.exec((err, allAspirants) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        var aspirantExists = false;

        allAspirants.forEach(aspirant => {
            if(aspirant.feedback.includes(req.query.aspirantfeedback)){
                aspirantExists = true
            }
        })
        if(aspirantExists){
            return res.json({ "status": "Error" })
        } else {
            let newResume = new ResumeModel({ name: req.query.feedback })
            newResume.save(function (err) { 
                let newAspirant = new AspirantModel({ feedback: req.query.aspirantfeedback });
                newAspirant.save(function (err) {
                    if(err){
                        return res.json({ "status": "Error" })
                    } else {
                        return res.json({ "status": "OK" })
                    }
                })
            })
        }
    })

    // return res.json({ status: 'OK' })

})

app.get('/api/employers/create', (req, res)=>{
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = EmployerModel.find({})
    query.exec((err, allEmployers) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let employerExists = false;
        allEmployers.forEach(employer => {
            if(employer.email.includes(req.query.employeremail)){
                employerExists = true
            }
        })
        if(employerExists){
            return res.json({ "status": "Error" })
        } else {
            let newEmployer = new EmployerModel({ name: req.query.employername, secondName: req.query.employersecondname, email: req.query.employeremail, password: "", phone: req.query.employerphone, company: req.query.employercompany, region: req.query.employerregion })
            newEmployer.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    return res.json({ "status": "OK" })
                }
            })
        }
    })
})

app.get('/api/employers/password/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let encodedPassword = "#"
    let saltRounds = 10
    let salt = bcrypt.genSalt(saltRounds)
    let alphabet = "abcdefghjiklmnoprstuvwxyz"
    randomWords = ''
    for(let i = 0; i < Math.floor(Math.random() * 10); i++){
        let randomIndex = Math.floor(Math.random() * alphabet.length)
        let randomLetter = alphabet[randomIndex]
        randomWords += randomLetter
    }
    encodedPassword = bcrypt.hashSync(randomWords, saltRounds)
    if(req.query.employerphone.includes('@gmail.com')){
        EmployerModel.updateOne({ email: req.query.employerphone }, { password: encodedPassword }, (err, citizen) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            let mailOptions = {
                from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                to: `${req.query.employerphone}`,
                subject: `Новый пароль`,
                html: `<h3>Новый пароль:</h3><p>${randomWords}</p>`,
            }
            transporter.sendMail(mailOptions, function (err, info) {
                return res.json({ status: 'OK', newPassword: randomWords })
            })
        })
    } else if (req.query.employerphone.includes('+7')){
        EmployerModel.updateOne({ phone: req.query.employerphone }, { password: encodedPassword }, (err, citizen) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            let mailOptions = {
                from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                to: `${req.query.employerphone}`,
                subject: `Новый пароль`,
                html: `<h3>Новый пароль:</h3><p>${randomWords}</p>`,
            }
            transporter.sendMail(mailOptions, function (err, info) {
                return res.json({ status: 'OK', newPassword: randomWords })
            })
        })
    }
})


app.get('**', (req, res) => { 
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

// const port = process.env.PORT || 8080
const port = 4000  
app.listen(port)