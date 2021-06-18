<template>
  <base-layout>
      <template v-slot:navbar>
          <Navbar />
      </template>
      <template v-slot:main>
            <Content class="content" :title="title || this.$route.meta.title || this.$route.name">
                <slot />
            </Content>
      </template>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Navbar from '@/common/components/partials/Navbar.vue'
import Content from "@/common/components/content/HeaderContent.vue"

export default {
    components: {
        Content,
        Navbar,
        BaseLayout
    },
    props: {
        title: String
    }
}
</script>
