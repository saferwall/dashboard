<template>
<div class="auth-card">
    <message v-if="sent" title="Confirm your registration" message="We’ve sent a link to the email you specified." button="Check my email" link="/login" />
    <form method="POST" class="w-full" @submit="formSubmited">
        <div class="header flex my-3">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="41.96" height="41.961" viewBox="0 0 41.96 41.961">
                <g id="add-user" transform="translate(0)" style="isolation: isolate">
                    <g transform="translate(0)">
                        <g transform="translate(0)">
                            <path d="M30.124,21.055a21.326,21.326,0,0,0-2.466-.99,11.146,11.146,0,1,0-13.346.007A21.319,21.319,0,0,0,.107,35.955a4.98,4.98,0,0,0,4.868,6.005H25.16a1.639,1.639,0,1,0,0-3.278H4.974a1.665,1.665,0,0,1-1.311-.623,1.712,1.712,0,0,1-.347-1.436,18.11,18.11,0,0,1,17.23-14.34q.216.008.435.008t.439-.009a17.854,17.854,0,0,1,7.3,1.733,1.639,1.639,0,0,0,1.407-2.961ZM21.38,19q-.2,0-.4,0t-.4,0a7.868,7.868,0,1,1,.8,0Z" transform="translate(0)" fill="#0d9677" />
                        </g>
                    </g>
                    <g transform="translate(26.39 26.389)">
                        <path d="M335.932,328.147h-4.507v-4.507a1.639,1.639,0,1,0-3.278,0v4.507h-4.507a1.639,1.639,0,1,0,0,3.278h4.507v4.507a1.639,1.639,0,0,0,3.278,0v-4.507h4.507a1.639,1.639,0,0,0,0-3.278Z" transform="translate(-322 -322)" fill="#0d9677" />
                    </g>
                </g>
            </svg>

            <h2 class="title text-3xl font-semibold">
                Sign Up
            </h2>
        </div>
        <div class="content mt-8">
            <template v-if="errors.length > 0">
                <alert type="danger">{{ errors[0] }}</alert>
            </template>
            <div class="form-group w-full my-4">
                <input autocomplete="username" type="text" class="form-input" placeholder="Username" v-model="username">
            </div>
            <div class="form-group w-full my-4">
                <input autocomplete="email" type="email" class="form-input" placeholder="Email" v-model="email">
            </div>

            <password placeholder="Password" v-model="password" />

            <div class="form-group justify-between py-2">
                <label for="agree">
                    <input type="checkbox" name="agree" id="agree"> I agree to the <a class="text-primary font-bold" target="_blank" href="https://about.saferwall.com/tos">Terms of Service</a>
                </label>
            </div>
            <div class="form-group">
                <button class="btn-submit">
                    Create account
                </button>
            </div>
            <div class="form-group justify-center pt-3">
                Already have an account ? <router-link class="text-primary font-bold mx-2" to="/auth/login">Login</router-link>
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
import Message from '@/common/components/elements/Message.vue'
import Alert from '@/common/components/elements/Alert.vue'

export default {
    components: {
        Message,
        Alert,
        Password
    },
    data() {
        return {
            username: null,
            password: null,
            errors: [],
            sent: false
        }
    },
    methods: {
        ...authMethods,
        formSubmited: function (e) {
            e.preventDefault();

            this.errors = ['Username','Email','Password'].map(field => !this[field.toLowerCase()]  ? `${field} required.` : null).filter(x=>!!x);

            if (this.errors.length > 0) return true;

            this.register({
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }).then(() => {
                    this.username = null;
                    this.password = null;
                    this.email = null;
                    this.sent = true;
                })
                .catch((error) => {
                    this.errors.push(error.response ? error.response.data.verbose_msg : 'Internal Server Error')
                })

        }
    }
}
</script>
