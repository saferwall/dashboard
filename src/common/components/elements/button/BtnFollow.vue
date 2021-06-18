<template>
    <btn :class="followed ? 'btn-active':''" @click="$emit('toggleFollow', $target)">
        {{ followed ?  'UnFollow' : 'Follow' }}
    </btn>
</template>

<script>
import Btn from './Btn.vue'
export default {
    components: {
        Btn
    },
    props : {
        followed: {
            default: false,
            type: Boolean
        }
    },
    emits: [ 'toggleFollow' ]
}
</script>

<style scoped>
.btn-active{
    @apply bg-primary bg-opacity-10 border-none font-medium;
}
</style>