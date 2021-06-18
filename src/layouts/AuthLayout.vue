<template>
    <base-layout>
        <template v-slot:navbar>
            <div class="logo">
                <logo />
            </div>
        </template>
        <template v-slot:main>
            <Content class="main-content">
                <slot />
            </Content>
        </template>
    </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue"
import Logo from '@/common/components/elements/Logo.vue'
import Content from "@/common/components/content/Content.vue"

export default {
    components: {
        BaseLayout,
        Content,
        Logo
    },
}
</script>

<style lang="scss" scoped>
    .logo {
        @apply w-full md:w-sidebar md:px-6 px-5 flex justify-center md:justify-start text-black font-extrabold;
        height: 100%;
    }
    .main-content{
        @apply flex items-center justify-center py-10;
    }
</style>

<style lang="scss" >
    .form-input {
    @apply w-full px-6 py-4 border rounded-md border-gray-light placeholder-gray-medium text-lg;
    }
    .form-group {
    @apply w-full my-4 flex flex-wrap items-center;
    }
    .btn-submit{
        @apply w-full px-6 py-5 bg-primary rounded-md text-light font-bold text-lg;
    }
    .auth-card{
        @apply mt-4 flex min-w-full md:min-w-6/7 lg:min-w-5/7 xl:min-w-6/12 bg-light md:rounded-2xl pt-20 pb-8 px-20 shadow-sm;
    }
</style>