import Router from 'koa-router';
import {Address} from '../models/address';


const AddressRouter = new Router({
    prefix:"api/address",
});

const LocationRouter = new Router({
    prefix:"api/location",
});

//将数据存入数据库
AddressRouter.post("/address",async (ctx) => {
    const {name,tel,regios,detail_address,code,type} = ctx.body;

    //查询数据库
    const result = Address.findOne(regios);
    //判断数据库中是否已经存在这条数据，
    if(result){
        console.log("这条地址已经存在。");
        return;
    }
    await ctx.body.save();
});

//读取全部数据
LocationRouter.get("/location",async (ctx) => {
    const results = Address.find();
    return results;
});


export default {AddressRouter,LocationRouter};



