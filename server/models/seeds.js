import mongoose from "mongoose";
import User from "./user.js";

mongoose.connect("mongodb://127.0.0.1:27017/agrosync", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await User.deleteMany({});
    const user = new User({
        email: "abc@example.com",
        name: "abc",
        phone: "1234567890",
    });
    await user.save();
};
seedDB();
