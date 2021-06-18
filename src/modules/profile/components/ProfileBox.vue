<template>
    <card class="profile-box">
        <div class="profile-avatar">
            <avatar width="125px" height="125px" :username="username" />
        </div>
        <div class="profile-info">
            <h1 class="profile-title">
                {{username}}
            </h1>
            <a href="#" class="profile-username">
                @{{username}}
            </a>
            <p class="profile-desc">
                {{bio}}
            </p>
            <p class="profile-msince">
                Member since {{ getMemberSince }}
            </p>
            <a v-if="github" class="profile-github" target="_blank" :href="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.713" height="16.211" viewBox="0 0 14.713 16.211">
                    <path id="icon" d="M18.538,13.447a.561.561,0,0,0-.794-.794l-2.97,2.97a2.652,2.652,0,0,0,3.75,3.75l6.707-6.707a3.7,3.7,0,0,0-5.242-5.228L13.3,14.131a4.762,4.762,0,1,0,6.734,6.734L23,17.9a.561.561,0,1,0-.794-.794l-2.97,2.97a3.639,3.639,0,1,1-5.146-5.146l6.693-6.693a2.546,2.546,0,0,1,1.82-.753,2.58,2.58,0,0,1,1.82.753,2.546,2.546,0,0,1,.753,1.82,2.58,2.58,0,0,1-.753,1.82l-6.707,6.707a1.545,1.545,0,0,1-2.163,0,1.52,1.52,0,0,1,0-2.163l2.984-2.97Z" transform="translate(-11.75 -6.2)" stroke="#0d9677" stroke-width="0.3"/>
                </svg>

                <span>{{github}}</span>
            </a>
        </div>
        <div v-if="false" class="profile-actions">
            <btn link="/account/settings" size="xl" class="active">
                Edit My Profile
            </btn>
        </div>
    </card>
</template>

<script>
import { timeAgo } from '@/common/functions';

import Card from '@/common/components/elements/Card.vue'
import Avatar from '@/common/components/elements/Avatar.vue'
import Btn from '@/common/components/elements/button/Btn.vue'

export default {
    components : {
        Card,
        Avatar,
        Btn,
    },
    props : {
        username : {
            type: String,
            default: 'Username'
        },
        bio : {
            type: String,
            default : 'Welcome to my profile !'
        },
        github : {
            type: String,
            default : null
        },
        member_since: {
            type: [Date, String],
        }
    },
    computed: {
        getMemberSince(){
            console.log(this.member_since);
            return timeAgo(this.member_since)
        }
    }
}
</script>

<style lang="scss" scoped>
.profile-box{
    @apply flex flex-wrap justify-between px-4 py-12 md:px-14 md:py-16;

    .profile-avatar{
        @apply flex px-8 md:px-0;
    }
    .profile-actions {
        @apply w-full pt-8 flex justify-center md:w-auto;
    }

    .profile-info{
        @apply flex flex-grow w-min flex-col md:px-14;

        .profile-title{
            @apply text-xl font-bold;
        }

        .profile-desc{
            @apply text-gray my-2;
        }

        .profile-msince{
            @apply text-sm text-gray;
        }

        .profile-github{
            @apply flex items-center font-bold space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary w-max;
        }
    }
}
</style>