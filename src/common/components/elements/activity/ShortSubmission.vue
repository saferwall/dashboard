<template>
    <div class="like-box">
        <div class="row-hash">
            <hash-input :hash="sha256" class="input-hash" />
            <btn-like :liked="dliked" @click="toggleLike" />
        </div>
        <file-meta :classification="getClassification" :scan="getScore" :filename="filename" />
    </div>
</template>

<script>
import { fileActions } from '@/state/helpers'
import { getClass } from '@/common/classification'

import HashInput from '@/common/components/elements/HashInput.vue'
import BtnLike from '../button/BtnLike.vue'
import FileMeta from '../FileMeta.vue'

export default {
    components: {
        HashInput,
        FileMeta,
        BtnLike,
    },
    props: {
        id: {
            type: String
        },
        sha256: {
            type: String
        },
        class: {
            type: Object
        },
        filename: {
            type: String
        },
        multiav: {
            type: String
        },
        liked: {
            type: Boolean
        },
        tags : {
            type: Array,
            default: ()=>{return []}
        }
    },
    data(){
        return {
            dliked: false
        }
    },
    computed:{
        getScore(){
            let s = (this.multiav || "").split('/');
            return {
                value: s[0],
                total: s[1]
            }
        },
        getClassification(){
            return getClass(this.class)
        }
    },
    methods : {
        ...fileActions,
        async toggleLike(){
            if (this.dliked) {
                return this.doUnLike({ id: this.sha256 })
                    .then(()=>{
                        this.dliked = false;
                    })
            } 
            this.doLike({ id: this.sha256 })
                .then(()=>{
                    this.dliked = true;
                })
        }
    },
    created(){
        this.dliked = this.liked;
    }
}
</script>

<style lang="scss" scoped>
.like-box {
    @apply px-8 py-8;

    .row-hash{
        @apply flex items-center ;

        .input-hash{
            @apply flex-grow;
        }

    }
}
</style>
