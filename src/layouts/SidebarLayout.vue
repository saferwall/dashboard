<template>
  <div>
    <Header />
    <Sidebar class="sidebar" v-show="sidebarActive" />
    <Content class="content" :class="sidebarActive ? 'sactive':''" >
      <slot />
    </Content>
    <Footer :class="sidebarActive ? 'sactive':''" />
  </div>
</template>

<script>
import Header from "@/components/partials/Header"
import Footer from "@/components/partials/Footer"
import Content from "@/components/partials/page/PageContent"
import Sidebar from '@/components/partials/Sidebar'

export default {
  name : 'SidebarLayout',
  components: {Header , Footer , Content, Sidebar},

  setup(props){
    const sidebarActive = props.sidebarActive || true;


    return { sidebarActive }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  @apply w-sidebar;
}

.sactive{
  @apply md:w-scontent md:m-0 md:ml-auto md:px-16;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.slideLeft-enter-active,
.slideLeft-leave-active {
  transition-property: transform;
  transition-duration: 0.25s;
}
.slideLeft-enter,
.slideLeft-leave-active {
  transform: translateX(-100%);
}
</style>