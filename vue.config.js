module.exports = {
    configureWebpack: {
        devServer: {
            //MOCK接口编写的地方
            //每次做更改这个配置文件的时候，都必须重启项目才会生效
            before(app) {
                // app.get('请求地址',(req,res)=>{
                //   res.json({
                //   })
                // })

                //用户信息池
                let userpoor = [
                        { username: 'admin', password: 'admin' },
                        { username: 'tim', password: '123456' }
                    ]
                    //注册接口
                app.get('/api/register', (req, res) => {
                        const { username, password } = req.query
                        const userlength = userpoor.filter(v => v.username == username).length
                        if (userlength > 0) {
                            res.json({
                                success: false,
                                message: '用户名已存在'
                            })
                        } else {
                            res.json({
                                success: true,
                                message: '注册成功'
                            })
                        }
                    })
                    //登录接口
                let tokenkey = 'xdclass'
                app.get('/api/login', (req, res) => {
                    const { username, password } = req.query
                    if (username == 'admin' && password == 'admin' || username == 'tim' && password == '123456') {
                        res.json({
                            code: 0,
                            message: '登录成功',
                            token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
                        })
                    } else {
                        res.json({
                            code: 1,
                            message: '账号或密码错误'
                        })
                    }
                })

                //首页轮播图数据接口
                app.get('/api/banner', (req, res) => {
                        res.json({
                            data: [{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/126637/40/4478/88835/5edf59b3E576e8ea0/f1cb74e9f75906f4.jpg!q70.jpg.dpg'
                                },
                                {
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/119217/11/7778/53047/5ec5d8d9Ebbb384c3/753ead9bc51795c9.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                                },
                                {
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123943/31/4178/184472/5eda0ef1E92fcaf46/49a9e2c706c8d40e.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                                }
                            ]
                        })
                    })
                    //滚动分类接口
                app.get('/api/rollinglist', (req, res) => {
                        res.json({
                            data: [
                                [{
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                ],
                                [{
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png',
                                        label: '京东超市'
                                    },
                                ],
                            ]
                        })
                    })
                    //获取分类页的分类接口
                app.get('/api/classify', (req, res) => {
                    switch (req.query.type) {
                        case '0':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },

                                ]
                            });
                            break;
                        case '1':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                        case '2':
                            res.json({
                                data: [{
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    }
                                ]
                            });
                            break;
                        case '3':
                            res.json({
                                data: [{
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                ]
                            });
                            break;
                        case '4':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                        case '5':
                            res.json({
                                data: [{
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                ]
                            });
                            break;
                        case '6':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                    }
                })
            }
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}