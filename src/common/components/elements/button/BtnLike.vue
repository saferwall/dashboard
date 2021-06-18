<template>
    <button class="btn-like" :class="liked ? 'liked':''">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M8.1,14.4a.949.949,0,0,1-.626-.235c-.654-.572-1.285-1.109-1.841-1.583l0,0A34.241,34.241,0,0,1,1.606,8.81,6.026,6.026,0,0,1,0,4.866,5.06,5.06,0,0,1,1.284,1.41,4.354,4.354,0,0,1,4.523,0,4.072,4.072,0,0,1,7.067.878,5.2,5.2,0,0,1,8.1,1.952,5.205,5.205,0,0,1,9.124.878,4.072,4.072,0,0,1,11.668,0a4.354,4.354,0,0,1,3.239,1.41,5.06,5.06,0,0,1,1.284,3.456A6.026,6.026,0,0,1,14.585,8.81a34.233,34.233,0,0,1-4.019,3.773A16.43,16.43,0,0,1,8.1,14.4Z" transform="translate(0.65 0.65)" stroke-width="2"/>
        </svg>

        {{ liked ? 'Unlik' : 'like'}}
    </button>
</template>

<script>
    export default {
        props : {
            liked:{
                default: false,
                type: Boolean,
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn-like{
    @apply m-1 p-4 flex items-center text-primary font-bold stroke-primary fill-white focus:outline-none;
    
    svg{
        @apply mr-2;
    }

    &:hover, &.liked{
        @apply fill-primary;
    }
}
</style>