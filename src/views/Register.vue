<template>
    <div>
        <img
            class="headerimg"
            src="//imgcps.jd.com/ling4/100004323294/5byA5a2m5YyF6KO5/5paw5a2m5pyf5paw5rCU6LGh/p-5d91a49642dd5b7c7d528987/25dcf9cf/cr/s1125x690/q70.jpg"
            alt=""
        />
        <cube-form :model="model" :schema="schema" @submit="submitHandler">
        </cube-form>
        <p class="register" @click="goLogin">立即登录</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                },
                schema: {
                    fields: [
                        //用户名配置
                        {
                            type: 'input',
                            modelKey: 'username',
                            label: '用户名',
                            props: {
                                placeholder: '请输入用户名'
                            },
                            rules: {
                                //校验规则
                                required: true,
                                type: 'string',
                                min: 3,
                                max: 15
                            },
                            trigger: 'blur',
                            messages: {
                                required: '用户名不能为空',
                                min: '用户名不能少于3个字符',
                                max: '用户名不能大于15个字符'
                            }
                        },
                        //密码配置
                        {
                            type: 'input',
                            modelKey: 'password',
                            label: '密码',
                            props: {
                                placeholder: '请输入密码',
                                type: 'password',
                                eye: {
                                    open: false
                                }
                            },
                            rules: {
                                required: true
                            },
                            trigger: 'blur'
                        },
                        {
                            type: 'submit',
                            label: '注册'
                        }
                    ]
                }
            }
        },
        methods: {
            submitHandler(e) {
                e.preventDefault()
                this.$http
                    .get('/api/register', { params: this.model })
                    .then(res => {
                        console.log(res.success)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },

            goLogin() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .headerimg
        height: 150px
        width: 100%
</style>


