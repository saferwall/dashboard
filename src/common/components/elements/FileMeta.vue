<template>
<div class="filemeta">
    <div>
        <h4>Classification</h4>
        <p :class="classification.color">
            <svg class="mr-1" width="22" height="22" viewBox="0 0 24 24" >
                <use :xlink:href="`/assets/icons/classification.svg#${classification.icon}`" width="15" height="15" ></use>
            </svg>
            <span>{{ classification.title }}</span>
        </p>
    </div>
    <div >
        <h4>File Name</h4>
        <p>{{ filename }}</p>
    </div>
    <div>
        <h4>Antivirus</h4>
        <p>{{ scan.value }}/{{ scan.total }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        filename: {
            type: String
        },
        scan: {
            type: Object,
            default: ()=>{return {}}
        },
        classification: {
            type: Object,
            default: ()=>{return {}}
        }
    }
}
</script>

<style lang="scss" scoped>
.filemeta {
    @apply mt-4 flex flex-wrap space-x-4 xl:space-x-12 justify-start fill-current;

    h4 {
        @apply font-bold text-sm uppercase text-gray;
    }

    p {
        @apply font-bold flex items-center text-sm mt-1;
    }

    .red {
        @apply text-danger;
    }

    .green {
        @apply text-success;
    }

    .orange {
        @apply text-warning;
    }
}
</style>
