<template>
    <footer >
        <div class="content grid grid-cols-3 gap-4 flex items-center ">
            <div class="copyright justify-start">
                &copy; {{ app.copyright }} {{ app.name }}. All rights reserved.
            </div>
            <div></div>
            <div class="media flex items-center justify-end">
                <p>Developed with ❤ by {{ app.name }}.</p>
                <a :href="app.media?.github" class="ml-2">
                    <svg width="20" height="20">
                        <image width="20" height="20" xlink:href="assets/icons/github.svg" />
                    </svg>
                </a>
                <a :href="app.media?.twitter" class="ml-2">
                    <svg width="20" height="20">
                        <image width="20" height="20" xlink:href="assets/icons/twitter.svg" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name : 'Footer',
    computed: {
        ...mapGetters(['app'])
    }
}
</script>

<style lang="scss" scoped>
footer{
    @apply mt-20 w-full  bg-white;
    
    .content{
        @apply md:w-9/12 lg:w-8/12 m-auto h-20; 
    }
    &.sactive .content{
        @apply w-full;
    }
}
</style>