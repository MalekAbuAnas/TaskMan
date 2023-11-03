const {Schema, model} = require("mongoose");

const TaskSchema = Schema({
    task: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    }
});

const TaskModel = model("tasks", TaskSchema);
module.exports = TaskModel;