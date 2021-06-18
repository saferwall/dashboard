<template>
   <card-tab :active="active" class="tab-follow" >
        <div v-if="rows.length == 0" class="empty-tab"><h2><slot name="emptymessage" /></h2></div>
        <template  v-else>
            <short-follower v-for="row in rows" :key="row.id" v-bind="row" />
        </template>
    </card-tab>
</template>

<script>
import CardTab from '@/common/components/elements/CardTab.vue'
import ShortFollower from '@/common/components/elements/activity/ShortFollower.vue'

export default {
    components: { 
        CardTab,
        ShortFollower,
    },
    props : {
        rows : {
            default : [],
        },
        active : {
            type: Boolean,
            default : true,
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-follow {
    @apply grid grid-cols-1 md:grid-cols-2 divide-gray divide-opacity-10;

    .empty-tab{
        @apply col-span-2;
    }
}
</style>