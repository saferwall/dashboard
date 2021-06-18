<template>
    <slot name="header">
        <Header>
            <slot name="navbar" />
        </Header>
    </slot>
    
    <slot name="main" />
    
    <slot name="footer">
        <Footer />
    </slot>
</template>


<script>
import Header from "@/common/components/partials/Header.vue"
import Footer from "@/common/components/partials/Footer.vue"

export default {
    components:{
        Header,
        Footer,
    }
}
</script>