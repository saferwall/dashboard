<template>
<div class="profile">
    <profile-box :username="username" v-bind="{ bio: profile.bio , member_since: profile.member_since }"/>
    <card-tabs :tabs="profileTabs" class="profile-stats" v-on:switchTab="switchTabEvent($event)">
        <tab-type-submission :active="activeTab == 'likes'" :rows="dataTabs.likes">
            <template v-slot:emptymessage>{{ username }} has not liked anything yet for the moment</template>
        </tab-type-submission>

        <tab-type-submission :active="activeTab == 'submissions'" :rows="dataTabs.submissions">
            <template v-slot:emptymessage>{{ username }} has not made any submissions for the moment</template>
        </tab-type-submission>
        
        <tab-type-follow :active="activeTab == 'followers'" :rows="dataTabs.followers">
            <template v-slot:emptymessage>{{ username }} has no followers for the moment</template>
        </tab-type-follow>
        
        <tab-type-follow :active="activeTab == 'following'" :rows="dataTabs.following">
            <template v-slot:emptymessage>{{ username }} does not subscribed to anyonefor the moment</template>
        </tab-type-follow>
        
        <tab-type-comment :active="activeTab == 'comments'" :rows="dataTabs.comments">
            <template v-slot:emptymessage>{{ username }} has not commented on any filesfor the moment</template>
        </tab-type-comment>
    </card-tabs>
</div>
</template>

<script>
import { userMethods, userGetters } from '@/state/helpers';

import CardTabs from '@/common/components/elements/CardTabs.vue'
import ProfileBox from '../components/ProfileBox.vue'
import TabTypeSubmission from '../components/TabTypeSubmission.vue'
import TabTypeFollow from '../components/TabTypeFollow.vue'
import TabTypeComment from '../components/TabTypeComment.vue'

export default {
    components: {
        ProfileBox,
        CardTabs,
        TabTypeSubmission,
        TabTypeFollow,
        TabTypeComment,
    },
    pageTitle(){
        return this.username
    },
    data() {
        return {
            username: null,
            profile : {},
            dataTabs: {
                likes: [],
                submissions: [],
                followers: [],
                following: [],
                comments: [],
            },
            profileTabs: [
                {
                    name: 'likes',
                    title: 'Likes (0)'
                },
                {
                    name: 'submissions',
                    title: 'Submissions (0)'
                },
                {
                    name: 'followers',
                    title: 'Followers (0)'
                },
                {
                    name: 'following',
                    title: 'Following (0)'
                },
                {
                    name: 'comments',
                    title: 'Comments (0)'
                },
            ],
            activeTab: null,
            userExist: false
        }
    },
    computed: {
        ...userGetters,
        
    },
    methods: {
        ...userMethods,
        async switchTabEvent(tab) {
            if (!this.userExist) return;
            
            // Fetch tab
            await this.fetchSection({
                username: this.username, 
                section: tab
            });

            // Set new data
            this.activeTab = tab;
            this.dataTabs[tab] = this.getSection({ username : this.username, name: tab });
        },
        refreshProfile(profile){
            // Update Profile Count & return first Tab
            this.profileTabs.map(
                (tab)=> {
                    let count = this.dataTabs[tab.name];
                    count = profile[`${tab.name}_count`] || 0;
                    tab.title = tab.title.replace(/([\d])/gm, count);
                    return tab;
                }
            );

            // Select default tab
            this.switchTabEvent(this.profileTabs[0].name);
        }
    },
    async beforeMount() {
        // Self user profile
        let userProfile = await this.getProfile();


        // Profile data
        this.username = this.$route.params.id || userProfile?.username;
        if (this.username){
            this.profile = (await (
                async ()=>{ 
                    let profile = await this.fetchProfile(this.username)
                        .then(data=>{
                            this.userExist = true;
                            return data;
                        });
                    this.refreshProfile(profile)
                    return profile;
                }
            ))();
        }
        this.profile = { ... this.profile , ... (userProfile && userProfile.data || {})};
        console.log("Profile : ", this.profile);
    }
}
</script>

<style lang="scss" scoped>
.profile {
    @apply space-y-4;
}
</style>

<style lang="scss">
.profile-stats {
    .empty-tab {
        @apply flex justify-center items-center text-center py-8 mt-4 text-gray text-sm;
    }
}
</style>
