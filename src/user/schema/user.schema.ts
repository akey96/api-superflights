import * as mongoose from 'mongoose';

export const Userchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
    }, {
        timestamps: true
    }
);

Userchema.index({ username: 1}, { unique: true});
Userchema.index({ email: 1}, { unique: true});