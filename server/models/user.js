import mongoose from 'mongoose';

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
    }]
})

export default mongoose.model('User', userSchema)