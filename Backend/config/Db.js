const mongoose = require("mongoose");
 


async function Connection (){
    const db = await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(`atlas is connected : ${db.connection.host}`)
}


module.exports = Connection;