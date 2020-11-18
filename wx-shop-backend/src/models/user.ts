import {Schema} from "mongoose";
import * as mongoose from "mongoose";

const userScheme = new Schema({
    openId: String
});

export const User = mongoose.model("User", userScheme);
