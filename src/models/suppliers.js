const mongoose = require("mongoose");

const { Schema } = mongoose;

const suppliersSchema = new Schema({
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

module.exports = mongoose.model("Suppliers", suppliersSchema);