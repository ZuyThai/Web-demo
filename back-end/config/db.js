const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI)
        //console.log('oke')
    }
    catch (error) {
        console.log('error')
        process.exit(1)
    }  
}

module.exports = { connectDB }