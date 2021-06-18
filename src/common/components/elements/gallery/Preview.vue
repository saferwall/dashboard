<template>
    <div class="gallery-preview" >
        <div class="overlay" @click="closeModal"></div>
        <div class="modal">
            <div class="header">
                <h2 class="title">{{ title }}</h2>
                <span class="close" @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.179" height="25.037" viewBox="0 0 25.179 25.037">
                        <g  transform="translate(1.414 1.414)">
                            <line x1="22.209" y2="22.209" transform="translate(0.141)" fill="none" stroke="#000" stroke-width="4"/>
                            <line x1="22.209" y1="22.209" fill="none" stroke="#000" stroke-width="4"/>
                        </g>
                    </svg>
                </span>
            </div>
            <div class="image" :style="{ backgroundImage: `url(${source})` }">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        source : {
            type: String
        },
        title : {
            type: String,
            default : 'Virtual Screen'
        }
    },
    emits: ['modalClose'],
    setup(_, { emit }){

        const closeModal = ()=>{
            emit('modalClose', true);
        }

        return { closeModal }
    }
}
</script>

<style lang="scss" scoped>
.gallery-preview{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #0000008f;
    z-index: 102;

    @apply flex items-center justify-center;

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 101;
        cursor: pointer;
    }

    .modal{
        @apply bg-light flex flex-wrap  w-2/3 h-3/4 content-center items-center justify-center rounded-2xl px-16 py-6;
        position: absolute;
        z-index: 103;

            
        .header{
            @apply w-full flex justify-between;
            
            .title{
                @apply text-3xl;
            }

            .close{
                @apply -mt-1 cursor-pointer; 
            }
        }

        .image {
            @apply mt-8 w-full h-4/5 content-center items-center justify-center rounded-2xl bg-gray-light;

            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center;
        }

    }
}
</style>