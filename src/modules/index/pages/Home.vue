<template>
  <upload-file />
  <latest-activities :activities="getActivities" />
</template>

<script>
import LatestActivities from '@/common/components/LatestActivities.vue'
import UploadFile from '@/common/components/UploadFile.vue'
import { activityGetters, activityMethods } from '@/state/helpers';

export default {
  components:  {
    UploadFile,
    LatestActivities
  },
  computed: {
    ...activityGetters
  },
  methods: {
    ...activityMethods
  },
  created(){
    this.fetchActivities();
  }
}
</script>