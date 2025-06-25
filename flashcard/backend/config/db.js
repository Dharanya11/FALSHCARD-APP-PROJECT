const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("Database is connected");
    } catch {
        console.log("Error");
    }
}
module.exports = connectDB