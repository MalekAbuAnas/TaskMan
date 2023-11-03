const {Schema, model} = require("mongoose");

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
    }
});

const AdminModel = model("admins", AdminSchema);
module.exports = AdminModel