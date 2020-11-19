import Router from "koa-router";
import axios from 'axios'
import * as appInfo from '../config/appSecret'
import {User} from "../models/user";
import jwt, {VerifyErrors} from 'jsonwebtoken'
import {jwtTokenKey} from "../config/jwtTokenKey";

const authRouter = new Router({
    prefix: '/api/auth'
});

interface registerPostParams {
    code: string
}

authRouter.post('/register', async (ctx) => {
    const body: registerPostParams = ctx.request.body;
    // 校验参数是否正确
    if (!body.code) {
        ctx.status = 401;
        ctx.body = {
            message: '请提供登录状态码'
        };
    }

    // 与微信后台通信，获取该用户在该小程序的openid
    const code = body.code;
    const result = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appInfo.appId}&secret=${appInfo.appSecret}&js_code=${code}&grant_type=authorization_code`)
    if (result.status >= 200 && result.status < 300) {
        // 查询该用户是否注册
        const queryResult = await User.findOne({
            openId: result.data.openid
        });
        // 未注册则执行静默注册
        if (!queryResult) {
            await new User({
                openId: result.data.openid
            }).save();
        }

        // 生成token
        const token = jwt.sign({
                openId: result.data.openid
            },
            jwtTokenKey,
            {
                expiresIn: '3d'
            }
        )

        ctx.status = 200;
        ctx.body = {
            message: 'ok',
            token
        }
    }

});

authRouter.get('/checkLogin', async (ctx) => {
    if (!ctx.request.query.token) {
        ctx.status = 401;
        ctx.body = {
            message: '请提供token'
        };
        return;
    }

    const token = ctx.request.query.token;

    // 在verify中加入回调函数避免因为token过期导致请求崩溃
    // jsonWebToken验证token的时候，如果token过期，会直接报错，验证时加入回调可以避免请求崩溃
    let tokenRef = {}
    jwt.verify(token, jwtTokenKey, (error: VerifyErrors | null, result: object | undefined) => {
        // 如果成功验证token，则将验证结果返回回调之外。
        if (!error) {
            tokenRef = result;
        }
    });

    let queryResult = null;
    // 如果没有取到openId属性，说明token过期，则不用查询数据库
    if ((tokenRef as {openId: string}).openId) {
        queryResult = await User.findOne({
            openId: (tokenRef as { openId: string }).openId
        })
    }

    // 查询到用户，说明登录未过期，且用户已经注册。
    if (queryResult) {
        ctx.status = 200;
        ctx.body = {
            loginState: 1
        }
    } else {
        ctx.status = 200;
        ctx.body = {
            loginState: 0
        }
    }
})

export default authRouter;
