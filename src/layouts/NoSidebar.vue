<template>
    <base-layout>
        <template v-slot:navbar>
            <Navbar />
        </template>
        <template v-slot:main>
            <Content>
                <slot />
            </Content>
        </template>
    </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Navbar from "@/common/components/partials/Navbar.vue"
import Content from "@/common/components/content/Content.vue"

export default {
    components: {
        BaseLayout,
        Navbar,
        Content,
    },
}
</script>