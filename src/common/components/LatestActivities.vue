<template>
<div class="latestactv my-9">
    <list-activities :activities="getActivities" :more="true" />
</div>
</template>

<script>
import ListActivities from './ListActivities.vue';

export default {
    components: {
        ListActivities
    },
    props : {
        activities: {
            default: function(){ return []},
            type:Array
        },
    },
    computed: {
        latestActivities() {
            return this.activities && this.activities.length || 0;
        },
        getActivities() {
            return this.activities;
        }
    }
}
</script>
