<template>
    <div class="hot-activities">
        <page-header title="Hot Activities" />
    </div>
</template>

<script>
import PageHeader from '../../components/shared/elements/PageHeader.vue'
export default {
    setup() {

        return {}
    },
    components: {
        PageHeader
    }
}
</script>

<style lang="scss" scoped>
.hot-activities {
    @apply h-full;
}
</style>
