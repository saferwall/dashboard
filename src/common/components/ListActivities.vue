<template>
<div class="activities my-9">
    <div v-if="latestActivities"  class="content">
        <template v-for="(activity, index) in getActivities" v-bind:key="`${activity.type}_${index}`">
            <activity-block v-bind="activity"></activity-block>
        </template>
    </div>
    <div v-else class="header py-3 mt-3" >
        <p class="text-sm text-gray mt-2" >No Activities available currently</p>
    </div>
    <div v-if="more && activities.length != 0" class="more">
        <show-more v-on:click="$emit('showMore', $event.target)">
            <p>Show more activities</p>
        </show-more>
    </div>
</div>
</template>

<script>
import ShowMore from './elements/button/ShowMore.vue';
import ActivityBlock from './elements/ActivityBlock.vue';

export default {
    components: {
        ActivityBlock,
        ShowMore
    },
    emits: [ 'showMore' ],
    props : {
        more : {
            type : Boolean,
            default: true,
        },
        activities : {
            type: Array,
            default : ()=>{
                return []
            }
        }
    },
    computed: {
        latestActivities() {
            return this.activities && this.activities.length >0;
        },
        getActivities() {
            return this.activities;
        }
    }
}
</script>
