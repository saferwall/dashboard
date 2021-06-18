<template>
<div class="auth-card">
    <form method="POST" class="w-full" @submit="formSubmited">
        <div class="header flex my-3">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="41.585" height="41.585" viewBox="0 0 41.585 41.585">
                <g id="enter" transform="translate(0 0)">
                    <path d="M17.76,210.6H1.3a1.3,1.3,0,1,1,0-2.6H17.76a1.3,1.3,0,1,1,0,2.6Zm0,0" transform="translate(0 -191.106)" fill="#0d9677" />
                    <path d="M123.971,143.58a1.3,1.3,0,0,1-.918-2.22l5.579-5.579-5.579-5.577a1.3,1.3,0,1,1,1.839-1.839l6.5,6.5a1.3,1.3,0,0,1,0,1.839l-6.5,6.5A1.3,1.3,0,0,1,123.971,143.58Zm0,0" transform="translate(-112.708 -117.589)" fill="#0d9677" />
                    <path d="M302.133,41.661a3.469,3.469,0,0,1-3.465-3.466V7.007a3.488,3.488,0,0,1,2.346-3.29L311.424.246a3.5,3.5,0,0,1,4.571,3.3V34.73a3.489,3.489,0,0,1-2.344,3.288l-10.414,3.472A3.625,3.625,0,0,1,302.133,41.661Zm10.4-38.986a1.019,1.019,0,0,0-.31.045L301.853,6.177a.894.894,0,0,0-.586.83V38.2a.913.913,0,0,0,1.176.821L312.81,35.56a.9.9,0,0,0,.586-.83V3.542A.868.868,0,0,0,312.529,2.675Zm0,0" transform="translate(-274.409 -0.076)" fill="#0d9677" />
                    <path d="M171.968,8.664a1.3,1.3,0,0,1-1.3-1.3v-2.6A4.769,4.769,0,0,1,175.433,0h19.493a1.3,1.3,0,1,1,0,2.6H175.433a2.169,2.169,0,0,0-2.166,2.166v2.6A1.3,1.3,0,0,1,171.968,8.664Zm0,0" transform="translate(-156.806 0)" fill="#0d9677" />
                    <path d="M182.364,350h-6.931a4.769,4.769,0,0,1-4.765-4.765v-2.6a1.3,1.3,0,1,1,2.6,0v2.6a2.169,2.169,0,0,0,2.166,2.166h6.931a1.3,1.3,0,1,1,0,2.6Zm0,0" transform="translate(-156.806 -313.609)" fill="#0d9677" />
                </g>
            </svg>

            <h2 class="title text-3xl font-semibold">
                Login
            </h2>
        </div>
        <div class="content mt-8">
            <template v-if="errors.length > 0">
                <alert type="danger">{{ errors[0] }}</alert>
            </template>
            <div class="form-group w-full my-4">
                <input autocomplete="login-username" v-model="username" type="text" class="form-input" placeholder="Username">
            </div>
            <password v-model="password" placeholder="Password" :required="true" />

            <div class="form-group justify-between py-2">
                <router-link to="/auth/confirmation">Didn’t confirm registration?</router-link>
                <router-link to="/auth/forgot-password">Forgot password ? </router-link>
            </div>
            <div class="form-group">
                <button class="btn-submit">
                    Login
                </button>
            </div>
            <div class="form-group justify-center pt-3">
                Not a member ? <router-link class="text-primary font-bold mx-2" to="/auth/register">Create your account</router-link>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import {
    authMethods
} from '@/state/helpers';

import Password from "@/common/components/elements/inputs/Password.vue"
import Alert from '@/common/components/elements/Alert.vue'

export default {
    components: {
        Password,
        Alert,
    },
    data() {
        return {
            username: null,
            password: null,
            errors: []
        }
    },
    methods: {
        ...authMethods,
        formSubmited: function (e) {
            e.preventDefault();

            this.errors = [];
            if (!this.username) this.errors.push("Username required.");
            if (!this.password) this.errors.push("Password required.");
            if (this.errors.length > 0) return true;

            this.logIn({
                    username: this.username,
                    password: this.password,
                }).then(() => {
                    // Redirect to the originally requested page, or to the home page
                    this.$router.push(
                        this.$route.query.redirectFrom || {
                            name: 'profile'
                        }
                    )
                })
                .catch((error) => {
                    this.errors.push(error.response ? error.response.data.verbose_msg : 'Internal Server Error')
                })

        }
    }
}
</script>
