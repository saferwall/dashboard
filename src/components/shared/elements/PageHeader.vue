<template>
    <div class="header">
        <div class="metatime">
            <back />
        </div>
        <div class="metainfo">
            <h1 class="title">
                {{ title }}
            </h1>
            <slot />
        </div>
    </div>
</template>

<script>
import Back from './button/Back.vue'
export default {
    props: ['title'],
    setup() {

        return {}
    },
    components: {
        Back
    }
}
</script>

<style lang="scss" scoped>
.header {
    @apply flex flex-wrap;

    svg {
        @apply mr-2;
    }

    .metatime {
        @apply w-full;
    }

    .metainfo {
        @apply grid grid-cols-3 gap-4 py-2 mt-8 w-full;

        .title {
            @apply text-3xl col-span-1;
        }
    }
}
</style>
