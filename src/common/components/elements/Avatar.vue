<template>
    <img v-show="false" height="20" width="20" :src="getSource" @load="onLoad" @error="onError" />
    <div class="avatar inline-grid rounded-full" :style="{ backgroundImage: `url(${getBackground})` , width: width  , height: height}"></div>
</template>

<script>
import { generateFromString } from 'generate-avatar';
import { generateAvatar } from '@/common/helpers';

export default {
    props : {
        username: {
            type: String,
            default : null
        },
        source: {
            type: String,
            default : null
        },
        width: {
            default :  '72px',
            type: String
        },
        height: {
            default :  '72px',
            type: String
        },
    },
    data(){
        return {
            background : '',
            loaded: false
        }
    },
    methods: {
        onError(){
            this.background = 'data:image/svg+xml;utf8,'+generateFromString(this.username);
        },
    },
    computed : {
        getSource(){
            return this.username && generateAvatar(this.username) || this.source;
        },
        getBackground(){
            return `"${this.background.replace(/"/gm,"'") || this.getSource}"`
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    width: 34px;
    height: 34px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXA8AAesBNGQg4IAAAAAASUVORK5CYII=);
    background-color: rgba(25, 25, 25, 0.1);

    background-size: cover;
    background-position: center;
}
</style>
