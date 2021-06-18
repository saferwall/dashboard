<template>
    <div class="alert" :class="`alert-${type}`">
        <slot />
    </div>
</template>

<script>
    export default {
        props :{
            type : {
                default: 'primary',
                type: String
            }
        }
    }
</script>

<style lang="scss" >
.alert{
    @apply flex items-center p-4 px-6 rounded-md;
    
    &.alert-danger {
        color: #fff;
        background-color: #ff5c75;
        border-color: #ff5c75;
    }
    &.alert-success {
        color: #fff;
        background-color: #43d39e;
        border-color: #43d39e;
    }
    &.alert-secondary {
        color: #fff;
        background-color: #1e2139;
        border-color: #1e2139;
    }
    &.alert-warning {
        color: #212529;
        background-color: #ffbe0b;
        border-color: #ffbe0b;
    }
    &.alert-info {
        color: #fff;
        background-color: #25c2e3;
        border-color: #25c2e3;
    }
}
</style>