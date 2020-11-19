import {Schema} from 'mongoose'
import * as mongoose from 'mongoose'

const addressSchema = new Schema({
    name:String,
    tel:Number,
    regios:String,
    detail_address:String,
    code:String,
    type:String,
});

export const Address = mongoose.model("Address",addressSchema);