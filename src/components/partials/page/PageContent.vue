<template>
  <div class="app-content h-full">
      <slot />
  </div>
</template>

<script>
export default {
    props: {
        title: {
            default: "Summary",
            type: String,
        },
    }
}
</script>

<style lang="scss" scoped>
.app-content {
    @apply md:w-9/12 m-auto mx-40 pt-32 pb-10;
}
</style>
