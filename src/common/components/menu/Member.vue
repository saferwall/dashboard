<template >
    <router-link to="/hot-activities" class="btn-menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="15.3444" height="19.1412" viewBox="0 0 12.787 15.951">
            <path d="M61.749,5.532a17.229,17.229,0,0,1-2.534-3.567A8.212,8.212,0,0,1,58.6.52L58.464,0l-.491.219A4.905,4.905,0,0,0,55.8,2.383a4.948,4.948,0,0,0-.455,2.191.705.705,0,0,1-1.2.5l-.914-.914-.315.434c-.033.045-.8,1.105-.941,1.317A6.244,6.244,0,1,0,63.427,9.349,5.934,5.934,0,0,0,61.749,5.532Zm-4.566,9.146a5.33,5.33,0,0,1-4.45-8.262c.071-.108.357-.506.6-.85l.156.156a1.62,1.62,0,0,0,2.765-1.153,4.039,4.039,0,0,1,.358-1.777,4.035,4.035,0,0,1,1.293-1.476,16.323,16.323,0,0,0,3.161,4.83,5.206,5.206,0,0,1,1.441,3.2A5.335,5.335,0,0,1,57.184,14.678Z" transform="translate(-50.79 0.209)"  stroke="#898989" stroke-width="0.3" />
        </svg>

        Hot activities
    </router-link>
    <div v-if="getUser" class="btn-menu btn-border profile-menu" tabindex="4" @focusout="menuDisplay = false">
        <div class="profile-content" @click="menuDisplay = !menuDisplay">
            <avatar width="36px" height="36px" :username="getUser.username" />
            <span class="text-dark">{{ getUser.username }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8">
                <path  d="M5,0l5,8H0Z" transform="translate(10 8) rotate(180)" />
            </svg>
        </div>

        <div class="inline-block mt-10">
            <drop-menu :display="menuDisplay" >
                <a @click="$router.push('/profile')" class="dropmenu-item">
                    <svg id="group" xmlns="http://www.w3.org/2000/svg" width="15.654" height="17.789" viewBox="0 0 15.654 17.789">
                        <g transform="translate(3.558)">
                            <path d="M13.269,15.039A4.193,4.193,0,0,1,9,10.769,4.193,4.193,0,0,1,13.269,6.5a4.193,4.193,0,0,1,4.269,4.269A4.193,4.193,0,0,1,13.269,15.039Zm0-7.116a2.846,2.846,0,1,0,2.846,2.846A2.855,2.855,0,0,0,13.269,7.923Z" transform="translate(-9 -6.5)" />
                        </g>
                        <g transform="translate(0 10.673)">
                            <path d="M21.443,21.116a.672.672,0,0,1-.712-.712V17.558A2.189,2.189,0,0,0,18.6,15.423H10.058a2.189,2.189,0,0,0-2.135,2.135V20.4a.672.672,0,0,1-.712.712A.672.672,0,0,1,6.5,20.4V17.558A3.523,3.523,0,0,1,10.058,14H18.6a3.523,3.523,0,0,1,3.558,3.558V20.4A.672.672,0,0,1,21.443,21.116Z" transform="translate(-6.5 -14)" />
                        </g>
                    </svg>
                    Profile
                </a>
                <a @click="$router.push('/account/settings')" class="dropmenu-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.475" height="20.475" viewBox="0 0 512 512">
                        <path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
                    </svg>
                    Settings
                </a>
                <a @click="$router.push('/auth/logout')" class="dropmenu-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.056" height="16.198" viewBox="0 0 15.056 16.198">
                        <g id="Icon" transform="translate(0.15 0.15)" style="isolation: isolate">
                            <g transform="translate(0 0)">
                                <path d="M130.916,132.994l.007-.007a.246.246,0,0,0,.026-.036s0-.006.007-.01.016-.026.023-.039a.011.011,0,0,1,0-.007c.006-.013.013-.026.019-.042s0,0,0-.006.01-.029.016-.045,0-.007,0-.007a.228.228,0,0,0,.01-.045.029.029,0,0,1,0-.016c0-.013,0-.026.007-.039a.47.47,0,0,0,0-.11.163.163,0,0,0-.007-.039.029.029,0,0,0,0-.016c0-.016-.007-.029-.01-.045s0-.006,0-.006a.252.252,0,0,0-.016-.045s0,0,0-.007-.013-.029-.019-.042a.011.011,0,0,0,0-.006.243.243,0,0,0-.023-.039s0-.007-.007-.01a.336.336,0,0,0-.026-.036l-.007-.007a.458.458,0,0,0-.039-.042l-3.209-3.206a.558.558,0,0,0-.789.789l2.259,2.259h-8.979a.557.557,0,1,0,0,1.113h8.983l-2.242,2.242a.556.556,0,1,0,.785.789l3.19-3.19C130.89,133.02,130.9,133.007,130.916,132.994Z" transform="translate(-116.29 -124.693)"  stroke="#adadad" stroke-width="0.3"/>
                                <path d="M20.621,1.113h4.154a.557.557,0,1,0,0-1.113H20.621A3.026,3.026,0,0,0,17.6,3.021v9.856A3.026,3.026,0,0,0,20.621,15.9h4.086a.557.557,0,1,0,0-1.113H20.621a1.911,1.911,0,0,1-1.908-1.908V3.021A1.911,1.911,0,0,1,20.621,1.113Z" transform="translate(-17.6 0)"  stroke="#adadad" stroke-width="0.3"/>
                            </g>
                        </g>
                    </svg>

                    Logout
                </a>
            </drop-menu>
        </div>
    </div>
</template>


<script>
import { userGetters } from "@/state/helpers";

import Avatar from "@/common/components/elements/Avatar";
import DropMenu from "@/common/components/elements/DropMenu.vue";

export default {
    components: {
        Avatar,
        DropMenu
    },
    computed: {
        ...userGetters
    },
    data(){
        return {
            menuDisplay : false
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-menu{
    @apply cursor-pointer focus:outline-none;

    .profile-content{
        @apply flex items-center text-black space-x-2;
    }

    &:hover .dropmenu {
        display: block !important;
    }


    .dropmenu-item{
        @apply flex items-center p-3 px-4 text-gray mt-1;

        &:hover , &.active{
            @apply bg-secondary bg-opacity-10 rounded-md text-primary fill-primary;
        }

        svg{
            @apply mr-2 w-4;
        }
    }
}
</style>