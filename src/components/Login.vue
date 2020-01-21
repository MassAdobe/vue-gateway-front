<template>
    <div id="login" class="main">
        <div class="mainDiv">
            <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
                <template slot="header">MassAdobe Gateway Sys</template>
                <template slot="lead">
                    这是一个网关的控制台
                </template>
                <hr class="my-4">
                <b-card class="mainBcard" no-body>
                    <b-tabs pills card end>
                        <b-tab title="登录" active>
                            <b-form @submit.stop.prevent>
                                <label style="color: darkcyan">Username：</label>
                                <b-input v-model="username" :state="validation"></b-input>
                                <b-form-invalid-feedback :state="validation">
                                    Plz type in Username.
                                </b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validation">
                                    Very Good!
                                </b-form-valid-feedback>
                            </b-form>
                            <b-form @submit.stop.prevent>
                                <label style="color: darkcyan">Password：</label>
                                <b-input v-model="password" type="password"
                                         aria-describedby="password-help-block"></b-input>
                                <b-form-text id="password-help-block">
                                    Plz type in Password.
                                </b-form-text>
                            </b-form>
                            <b-button class="mainfBtn" variant="info" @click="btnLogin">登录</b-button>
                        </b-tab>
                        <b-tab title="注册">
                            <b-form @submit.stop.prevent>
                                <label style="color: darkcyan">Username：</label>
                                <b-input v-model="reUsername" :state="reValidation"></b-input>
                                <b-form-invalid-feedback :state="reValidation">
                                    Your username must be 8-18 characters long.
                                </b-form-invalid-feedback>
                                <b-form-valid-feedback :state="reValidation">
                                    Looks Good.
                                </b-form-valid-feedback>
                            </b-form>
                            <b-form @submit.stop.prevent>
                                <label style="color: darkcyan">Password：</label>
                                <b-input v-model="rePassword" type="password"
                                         aria-describedby="password-help-block"></b-input>
                                <b-form-text id="password-help-block">
                                    Your password must be 8-20 characters long.
                                </b-form-text>
                            </b-form>
                            <b-form @submit.stop.prevent>
                                <label style="color: darkcyan">Confirm：</label>
                                <b-input type="password" v-model="conPassword" :state="reConfirm"></b-input>
                                <b-form-invalid-feedback :state="reConfirm">
                                    Not Correct!
                                </b-form-invalid-feedback>
                                <b-form-valid-feedback :state="reConfirm">
                                    Correct!
                                </b-form-valid-feedback>
                            </b-form>
                            <b-button class="mainfBtn" variant="info" @click="btnRegist">注册</b-button>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                reUsername: '',
                rePassword: '',
                conPassword: '',
            }
        },
        components: {},
        methods: {
            btnLogin() {
                if (this.username.length === 0 || this.password.length === 0) {
                    this.makeToast("danger", "错误", "用户名和密码不能为空！");
                }
            },
            btnRegist() {

            },
        },
        computed: {
            validation() {
                return this.username.length > 7 && this.username.length < 19
            },
            reValidation() {
                return this.reUsername.length > 7 && this.reUsername.length < 19
            },
            reConfirm() {
                return this.rePassword === this.conPassword
            }
        }
    };
</script>

<style>
    .main {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #4AA0B5;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .mainDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 100px;
    }

    .mainBcard {

    }

    .mainfBtn {
        margin-top: 10px;
    }

</style>
