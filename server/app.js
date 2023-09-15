import express from 'express';
// import { resolvePackageData } from 'vite';
const app = express();
const router = express.Router({ mergeParams: true });
// import userRoutes from './routes/users.js'
// import methodOverride from 'method-override'
// import eventRoutes from './routes/events.js';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'
import { log } from 'console';
import multer from 'multer';
import {storage} from '../cloudinary/index.js';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import flash from 'connect-flash';
import session from 'express-session'; 
// import {cloudinary} from '../cloudinary/index.js';

import User from './models/user.js';
// const upload = multer({ storage });
const upload=multer({storage})

app.set('view engine','ejs')
// app.set('views',path.join(__dirname,"views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(methodOverride("_method"));
// app.use('/', userRoutes)
// app.use('/', eventRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/agrosync", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/imageupload',(req, res) => {
    console.log('Route hit!');
    res.render('imageupload');
})
app.post('/imageupload', upload.single('file'), async (req, res) => {
    // const { email, name, phone } = req.body;
    const user = new User({
        email: 'sampfdfdsdflesdfgefeeemail1@gay.com',
        name: 'garedserfdfesdfgdfebikisaan1',
        phone: 56654499349
    });
    // user.images = req.files.map(f => ({ url: f.path, filename: f.filename }))
    console.log(req.file);
    // console.log(user);
    await user.save();
    res.send('Uploaded!');
})

app.post('/login',passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}) ,(req,res)=>{
    req.flash('success','Welcome back!')
    res.redirect('/campgrounds')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!');
    }
);