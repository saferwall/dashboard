<template>
<div class="short-comment space-x-8">
    <div class="cmt-info">
        <div class="cmt-body">
            {{ getContent }}
        </div>
        <p class="cmt-date">
            {{getCommentedDate}}
        </p>
    </div>
    <div class="cmt-file w-full">
        <router-link :to="`file/${sha256}/summary`">
            <hash-input :hash="sha256" />
        </router-link>
    </div>
</div>
</template>

<script>
import HashInput from '../HashInput.vue';
export default {
    components: {
        HashInput,
    },
    props: {
        id: {
            type: String
        },
        sha256 : {
            type: String
        },
        body: {
            type: String
        },
        followed: {
            default: false,
            type: Boolean
        },
        timestamp: {
            type: [Date, String]
        }
    },
    computed : {
        getCommentedDate(){
            return new Date(this.timestamp).toDateString();
        },
        getContent(){
            return this.body.replace(/<\/?[^>]+>/ig, " "); 
        }
    },
}
</script>

<style lang="scss" scoped>
.short-comment {
    @apply flex flex-wrap items-center justify-between p-6 m-4 space-y-6;

    .cmt-info{
        @apply flex flex-col space-y-2;
    }

    .cmt-date{
        @apply text-gray-medium;
    }
    .cmt-file{
        @apply cursor-pointer mx-0 py-1;
        input{
            @apply cursor-pointer;
        }
    }

    .btn-cmt{
        @apply p-2;
    }
}
</style>
