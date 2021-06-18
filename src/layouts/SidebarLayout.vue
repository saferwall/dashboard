<template>
  <base-layout>
      <template v-slot:navbar>
          <Navbar />
      </template>
      <template v-slot:main>
          <Sidebar class="sidebar" v-show="sidebarActive" />
          <Content class="content" :class="sidebarActive ? 'sactive':''">
              <slot />
          </Content>
      </template>
  </base-layout>
</template>

<script>
import Navbar from '@/common/components/partials/Navbar.vue'
import Sidebar from '@/common/components/partials/Sidebar.vue'
import Content from "@/common/components/content/PageContent.vue"
import BaseLayout from '@/layouts/BaseLayout.vue'

export default {
    components: {
        BaseLayout,
        Content,
        Sidebar,
        Navbar,
    },

    setup(props) {
        const sidebarActive = props.sidebarActive || true;

        return {
            sidebarActive
        }
    }
}
</script>

<style lang="scss" scoped>
  .sidebar {
      @apply w-sidebar;
  }

  .sactive {
      @apply md:w-scontent md:m-0 md:ml-auto md:px-16;
  }
</style>
