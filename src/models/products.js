const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    id:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    isDeleted:{
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("Products", productsSchema);
// module.exports = mongoose.model("COLLECTION01", productsSchema);