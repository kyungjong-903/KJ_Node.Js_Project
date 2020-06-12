const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const { User } = require('./models/user');
const config = require('./config/key');


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!ㅎㅇㅎㅇㅎ'))

app.post('/register', (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success : false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, userInfo) => {
        if (!userInfo){
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        console.log("user : " + userInfo);
        userInfo.comparePassword( req.body.password, (err, isMatch) => {
            console.log("asd");
            if(!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})

            userInfo.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                //토큰을 저장함 어디에? 나는 세션에 하고싶은데 쿠키에 한다고 한다
                res.cookie("some_auth", user.token)
                .status(200).json({loginSuccess: true, userId: user._id})



            })
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

