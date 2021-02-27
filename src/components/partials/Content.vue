<template>
    <div class="app-content h-full">
        <slot />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-content {
    @apply mt-20 md:w-9/12 m-auto;
}
</style>
