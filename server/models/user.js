import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
        // unique: true,
        // lowercase: true
    },
    phone:{
        type:Number,
        require:true
        // unique:true
    },
    images: [{
        url: String,
        filename: String
    }],
    location:{
        type:String,
        require:true
    }
})

userSchema.plugin(passportLocalMongoose)


export default mongoose.model('User', userSchema)