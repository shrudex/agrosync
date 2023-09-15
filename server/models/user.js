import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone:{
        type:Number,
        require:true
    },
    images: [{
        url: String,
        filename: String
    }],
    town:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    password: {
        type: String,
        require: true
    }
});
    }]
})

userSchema.plugin(passportLocalMongoose);


export default mongoose.model('User', userSchema);
