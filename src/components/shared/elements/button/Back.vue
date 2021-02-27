<template>
<a class="btn-back" @click="goBack()">
    <svg xmlns="http://www.w3.org/2000/svg" width="7.883" height="13.22" viewBox="0 0 7.883 13.22">
        <path d="M3353.157,640.348l-5.973,5.973,5.973,5.973" transform="translate(-3345.911 -639.711)" fill="none" stroke="#0d9677" stroke-width="1.8" />
    </svg>

    back
</a>
</template>

<script>
import router from "@/router";

export default {
    setup() {
        const goBack = () => {
             router.go(-1);
        }

        return {
            goBack
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-back {
    @apply flex items-center text-primary font-bold capitalize cursor-pointer;

    svg{
        @apply mr-2;
    }
}
</style>
