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
        responses: [mongoose.Schema.Types.Map],
        invites: [mongoose.Schema.Types.Map],
    }, { collection : 'myemployers' });

    const EmployerModel = mongoose.model('EmployerModel', EmployerSchema);

const AspirantSchema = new mongoose.Schema({
    feedback: String,
    name: String,
    secondName: String,
    thirdName: String,
    password: String,
    email: String,
    phone: String,
    address: String,
    socialsNetworks: [mongoose.Schema.Types.Map],
    messages: [mongoose.Schema.Types.Map],
    responses: [mongoose.Schema.Types.Map],
    vacancies: [mongoose.Schema.Types.Map],
    invites: [mongoose.Schema.Types.Map],
    resumes: [mongoose.Schema.Types.Map],
    favorites: [mongoose.Schema.Types.Map],
    blocked: [mongoose.Schema.Types.Map],
    photos: [mongoose.Schema.Types.Map],
    examples: [mongoose.Schema.Types.Map],
    dataExchange: {
        type: Boolean,
        default: true
    },
    mobileApp: {
        type: Boolean,
        default: true
    },
    smsAdvices: {
        type: Boolean,
        default: true
    },
    smsAds: {
        type: Boolean,
        default: true
    },
    mailAdvices: {
        type: Boolean,
        default: true
    },
    mailNewVacancies: {
        type: Boolean,
        default: true
    },
    mailBirthday: {
        type: Boolean,
        default: true
    },
    mailViews: {
        type: Boolean,
        default: true
    },
    mailTrade: {
        type: Boolean,
        default: true
    },
    mailWeekDijest: {
        type: Boolean,
        default: true
    },
    mailInternship: {
        type: Boolean,
        default: true
    },
    mailAutosearch: {
        type: Boolean,
        default: true
    },
    pushViews: {
        type: Boolean,
        default: true
    },
    pushInvites: {
        type: Boolean,
        default: true
    },
    pushEmployer: {
        type: Boolean,
        default: true
    },
    pushAutosearch: {
        type: Boolean,
        default: true
    },
    pushNewVacancies: {
        type: Boolean,
        default: true
    },
    pushAdvices: {
        type: Boolean,
        default: true
    },
    pushAds: {
        type: Boolean,
        default: true
    },
}, { collection : 'myaspirants' });

const AspirantModel = mongoose.model('AspirantModel', AspirantSchema);

const VacancySchema = new mongoose.Schema({
    employerEmail: String,
    company: {
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
    profession: {
        type: String,
        default: ''
    },
    salary: {
        type: String,
        default: ''
    },
    experience: {
        type: Number,
        default: 0
    },
    shedule: {
        type: String,
        default: 'Полный день'
    },
    worktype: {
        type: String,
        default: 'Полная занятость'
    },
    companyIndustry: {
        type: String,
        default: 'Услуги для бизнеса'
    },
}, { collection : 'myvacancies' })
const VacancyModel = mongoose.model('VacancyModel', VacancySchema);

const ResumeSchema = new mongoose.Schema({
    aspirantEmail: String,
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
    profession: {
        type: String,
        default: ''
    },
    salary: {
        type: String,
        default: ''
    },
    specializations: {
        type: String,
        default: ''
    },
    level: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: ''
    },
    skills: {
        type: String,
        default: ''
    },
    about: {
        type: String,
        default: ''
    },
    workPlaces: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: `${Date.now}`
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    views: {
        type: Number,
        default: 0
    },
}, { collection : 'myresumes' });

const ResumeModel = mongoose.model('ResumeModel', ResumeSchema);
    
app.get('/api/resumes/all', (req, res) => {


    let queryOfResumes = ResumeModel.find({ _id: { $in: req.query.resumes }  })
    queryOfResumes.exec((err, allResumes) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        return res.json({ "status": "OK", resumes: allResumes })
    })

})

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
    
    let queryBefore = AspirantModel.find({ feedback: { $in: req.query.aspirantfeedback }  })
    queryBefore.exec((err, allAspirants) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allAspirants.length >= 1){
            let query =  AspirantModel.findOne({ 'feedback': req.query.aspirantfeedback }, function(err, aspirant){
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
        
        let aspirantExists = false

        allAspirants.forEach(aspirant => {
            if(aspirant.feedback.includes(req.query.aspirantfeedback)){
                aspirantExists = true
            }
        })
        if(aspirantExists){
            return res.json({ "status": "Error" })
        } else {
            let possibleEmail = ''
            let possiblePhone = ''
            if(req.query.aspirantfeedback.includes('@gmail.com')){
                possibleEmail = req.query.aspirantfeedback
            } else if(req.query.aspirantfeedback.includes('+7') && req.query.aspirantfeedback.length === 12){
                possiblePhone = req.query.aspirantfeedback
            }
            let newAspirant = new AspirantModel({ feedback: req.query.aspirantfeedback, name: "", secondName: "", thirdName: "", password: "",  email: possibleEmail,  phone: possiblePhone, address: ""  });
            newAspirant.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK" })
            })
        }
    })

    // return res.json({ status: 'OK' })

})

app.get('/api/resumes/create', (req, res)=>{
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = AspirantModel.findOne({ email: req.query.aspirantemail })
    query.exec((err, aspirant) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        let newResume = new ResumeModel({ aspirantEmail: req.query.aspirantemail, name: req.query.resumename, city: req.query.resumecity, secondName: req.query.resumesecondname, city: req.query.resumecity, born: req.query.resumeborn, gender: req.query.resumegender, citizenship: req.query.resumecitizenship, experience: req.query.resumeexperience, profession: req.query.resumeprofession, salary: req.query.resumesalary, specializations: req.query.resumespecializations, level: req.query.resumelevel, language: req.query.resumelanguage, skills: req.query.resumeskills, about: req.query.resumeabout, workPlaces: req.query.resumeworkplaces });
        newResume.save(function (err, resume) {
            if(err){
                return res.json({ "status": "Error" })
            } else {
                AspirantModel.updateOne({ email: req.query.aspirantemail },
                    { $push: 
                        {
                            resumes: [
                                {
                                    id: resume._id
                                }
                            ]
                            
                        }
                }, (err, resume) => {
                    if(err){
                        return res.json({ "status": "Error" })
                    } else {

                        return res.json({ "status": "OK" })
                    }
                })
            }
        })
    })
})

app.get('/api/vacancy/favorite', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    AspirantModel.updateOne({ feedback: req.query.aspirantfeedback },
        { $push: 
            {
                favorites: [
                    {
                        id: req.query.vacancyid
                    }
                ]
            }
    }, (err, aspirant) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {
            return res.json({ "status": "OK" })
        }
    })
})

app.get('/api/vacancy/block', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    AspirantModel.updateOne({ feedback: req.query.aspirantfeedback },
        { $push: 
            {
                blocked: [
                    {
                        id: req.query.vacancyid
                    }
                ]
            }
    }, (err, aspirant) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {
            return res.json({ "status": "OK" })
        }
    })
})

app.get('/api/resume/view', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ResumeModel.updateOne({ _id: req.query.resumeid },
        {
            "$inc": { "views": 1 }
        }, (err, resume) => {
            if(err){
                return res.json({ "status": "Error" })
            } else {
                let resume = ResumeModel.findOne({ _id: req.query.resumeid })
                resume.exec((err, resume) => {
                    let query = AspirantModel.findOne({ feedback: resume.aspirantEmail })
                    query.exec((err, aspirant) => {
                        if(aspirant.mailViews){
                            if(err){
                                return res.json({ status: 'Error' })
                            }
                            let query = EmployerModel.findOne({ email: req.query.employeremail })
                            query.exec((err, employer) => {
                                if(err){
                                    return res.json({ status: 'Error' })
                                }
                                let mailOptions = {
                                    from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                                    to: `${aspirant.feedback}`,
                                    subject: `Просмотр вашего резюме`,
                                    html: `<h3>Компания ${employer.company}:</h3><p>просмотрела ваше резюме ${resume.profession}</p>`,
                                }
                                transporter.sendMail(mailOptions, function (err, info) {
                                    console.log('Добавлен просмотр и отправлено сообщение')
                                    return res.json({ "status": "OK" })
                                })
                            })
                        }
                    })
                })
            }
    })
})

app.get('/api/vacancy/response', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    AspirantModel.updateOne({ feedback: req.query.aspirantfeedback },
        { $push: 
            {
                responses: [
                    {
                        id: req.query.vacancyid,
                        type: 'response'
                    }
                ]
            }
    }, (err, aspirant) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {
            let query = VacancyModel.findOne({ _id: req.query.vacancyid })
            query.exec((err, vacancy) => {
                if(err) {
                    return res.json({ "status": "Error" })
                }
                EmployerModel.updateOne({ email: vacancy.employerEmail },
                    { $push: 
                        {
                            invites: [
                                {
                                    id: req.query.vacancyid,
                                    type: 'invite'
                                }
                            ]
                        }
                }, (err, employer) => {
                    if(err){
                        return res.json({ "status": "Error" })
                    } else {
                        return res.json({ "status": "OK" })
                    }
                })
            })
        }
    })
})

app.get('/api/resume/response', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    EmployerModel.updateOne({ email: req.query.employeremail },
        { $push: 
            {
                responses: [
                    {
                        id: req.query.resumeid,
                        type: 'response'
                    }
                ]
            }
    }, (err, aspirant) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {
            let query = ResumeModel.findOne({ _id: req.query.resumeid })
            query.exec((err, resume) => {
                if(err) {
                    return res.json({ "status": "Error" })
                }
                AspirantModel.updateOne({ feedback: resume.aspirantEmail },
                    { $push: 
                        {
                            invites: [
                                {
                                    id: req.query.resumeid,
                                    type: 'invite'
                                }
                            ]
                        }
                }, (err, aspirant) => {
                    if(err){
                        return res.json({ "status": "Error" })
                    } else {
                        return res.json({ "status": "OK" })
                    }
                })
            })
        }
    })
})

app.get('/api/vacancies/add', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let newVacancy = new VacancyModel({ employerEmail: req.query.employeremail, company: req.query.vacancycompany, city: req.query.vacancycity, born: req.query.vacancyborn, profession: req.query.vacancyprofession, salary: req.query.vacancysalary, experience: req.query.vacancyexperience, shedule: req.query.vacancyshedule, worktype: req.query.vacancyworktype, companyIndustry: req.query.vacancycompanyindustry });
    newVacancy.save(function (err, vacancy) {
        if(err){
            return res.json({ "status": "Error" })
        } else {
            EmployerModel.updateOne({ email: req.query.employeremail },
                { $push: 
                    {
                        vacancies: [
                            {
                                id: vacancy._id
                            }
                        ]
                        
                    }
            }, (err, employer) => {
                if(err){
                    return res.json({ "status": "Error" })
                } else {

                    return res.json({ "status": "OK" })
                }
            })
        }
    })

})

app.get('/api/views/add', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ResumeModel.updateOne({ _id: req.query.resumeid },
        {
            $inc: views
        }, (err, user) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {

            return res.json({ "status": "OK" })
        }
    })
})

app.get('/api/responses/add', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    AspirantModel.updateOne({ feedback: req.query.aspirantfeedback },
        { $push: 
            {
                responses: [
                    {
                        employer: resume.employerid,
                        type: 'response'
                    }
                ]
                
            }
    }, (err, user) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {

            return res.json({ "status": "OK" })
        }
    })
})

app.get('/api/aspirants/responses', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = AspirantModel.findOne({ feedback: req.query.aspirantfeedback })
    query.exec((err, aspirant) => {
        if(err){
            return res.json({ status: 'Error' })
        }
        let totalResponses = []
        let query = VacancyModel.find({ _id: { $in: aspirant.responses.flatMap((response) => new Map(response).get('id')) } })
        query.exec((err, responses) => {
            if(err){
                return res.json({ status: 'Error' })
            }
            totalResponses = [
                ...responses
            ]
            let query = ResumeModel.find({ _id: { $in: aspirant.invites.flatMap((invite) => new Map(invite).get('id')) } })
            query.exec((err, invites) => {
                if(err){
                    return res.json({ status: 'Error' })
                }
                totalResponses = [
                    ...totalResponses,
                    ...invites
                ]
                return res.json({ status: 'OK', responses: totalResponses  })  
            })
            
        })
    })
    
})

app.get('/api/aspirants/blocked', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = AspirantModel.findOne({ feedback: req.query.aspirantfeedback })
    query.exec((err, aspirant) => {
        if(err){
            return res.json({ status: 'Error' })
        }
        let totalBlocked = []
        let query = VacancyModel.find({ _id: { $in: aspirant.blocked.flatMap((block) => new Map(block).get('id')) } })
        query.exec((err, blocked) => {
            if(err){
                return res.json({ status: 'Error' })
            }
            totalBlocked = [
                ...blocked
            ]
            return res.json({ status: 'OK', blocked: totalBlocked  })        
        })
    })  
})

app.get('/api/aspirants/blocked/repair', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    mongoose.connection.collection("myaspirants").updateOne(
        { feedback: req.query.aspirantfeedback },
        { $pull: { 'blocked': { id: req.query.vacancyid } } }
    )
    return res.json({ status: "OK" })

})

app.get('/api/employers/responses', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = EmployerModel.findOne({ email: req.query.employeremail })
    query.exec((err, employer) => {
        if(err){
            return res.json({ status: 'Error' })
        }
        let totalResponses = []
        let query = ResumeModel.find({ _id: { $in: employer.responses.flatMap((response) => new Map(response).get('id')) } })
        query.exec((err, responses) => {
            if(err){
                return res.json({ status: 'Error' })
            }
            totalResponses = [
                ...responses
            ]
            let query = VacancyModel.find({ _id: { $in: employer.invites.flatMap((invite) => new Map(invite).get('id')) } })
            query.exec((err, invites) => {
                if(err){
                    return res.json({ status: 'Error' })
                }
                totalResponses = [
                    ...totalResponses,
                    ...invites
                ]
                return res.json({ status: 'OK', responses: totalResponses  })  
            })      
        })
    })  
})

app.get('/api/aspirants/get', (req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = AspirantModel.findOne({ feedback: req.query.aspirantfeedback })
    query.exec((err, aspirant) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let query = ResumeModel.find({ aspirantEmail: req.query.aspirantfeedback })
        query.exec((err, resumes) => {
            if (err){
                return res.json({ "status": "Error" })
            }
            let query = VacancyModel.find({  })
            query.exec((err, vacancies) => {
                if (err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK", aspirant: aspirant, resumes: resumes, vacancies: vacancies })
            })
        })
    })
})

app.get('/api/vacancy/get', (req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = VacancyModel.findOne({ _id: req.query.vacancyid })
    query.exec((err, vacancy) => {
        if(err) {
            return res.json({ status: "Error" })
        } else {
            return res.json({ status: "OK", resume: vacancy   })
        }
    })

})

app.get('/api/resume/get', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = ResumeModel.findOne({ _id: req.query.resumeid })
    query.exec((err, resume) => {
        if(err) {
            return res.json({ status: "Error" })
        } else {
            return res.json({ status: "OK", resume: resume   })
        }
    })

})


app.get('/api/vacancies/get', (req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = VacancyModel.find({  })
    query.exec((err, vacancies) => {
        if(err) {
            return res.json({ status: "Error" })
        } else {
            return res.json({ status: "OK", vacancies: vacancies   })
        }
    })

})

app.get('/api/resumes/get', (req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = ResumeModel.find({  })
    query.exec((err, resumes) => {
        if(err) {
            return res.json({ status: "Error" })
        } else {
            return res.json({ status: "OK", resumes: resumes   })
        }
    })

})

app.get('/api/employers/get', (req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = EmployerModel.findOne({ email: req.query.employeremail })
    query.exec((err, employer) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let query = VacancyModel.find({ employerEmail: req.query.employeremail })
        query.exec((err, vacancies) => {
            if (err){
                return res.json({ "status": "Error" })
            }
            return res.json({ "status": "OK", employer: employer, vacancies: vacancies })
        })
    })
})

app.get('/api/aspirants/mailings/save', (req, res)=>{
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let options = req.query.options.split('|')
    AspirantModel.updateOne({ feedback: req.query.aspirantfeedback  },
        {
            smsAdvices: options[0],
            smsAds: options[1],
            mailAdvices: options[2],
            mailNewVacancies: options[3],
            mailBirthday: options[4],
            mailViews: options[5],
            mailTrade: options[6],
            mailWeekDijest: options[7],
            mailInternship: options[8],
            mailAutosearch: options[9],
            pushViews: options[10],
            pushInvites: options[11],
            pushEmployer: options[12],
            pushAutosearch: options[13],
            pushNewVacancies: options[14],
            pushAdvices: options[15],
            pushAds: options[16],
        }, (err, aspirant) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ "status": "OK" })
    })

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

app.get('/api/aspirants/password/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let encodedPassword = "#"
    let saltRounds = 10
    let salt = bcrypt.genSalt(saltRounds)
    encodedPassword = bcrypt.hashSync(req.query.newpassword, saltRounds)
    AspirantModel.updateOne({ feedback: req.query.aspirantfeedback }, { password: encodedPassword }, (err, citizen) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
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