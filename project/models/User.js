const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        min: 3,
        max: 25,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },

    ei: {
        type: String,
        max:10,
    },
    sn: {
        type: String,
        max:10,
    },
    tf: {
        type: String,
        max:10,
    },
    pj: {
        type: String,
        max:10,
    },
    mbti: {
        type: String,
        max:50,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);