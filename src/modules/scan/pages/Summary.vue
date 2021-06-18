<template>
  <div class="summary">
    <template v-if="fileLoaded">
      <Card>
        <Progress />
      </Card>

      <Card title="Basic Properties">
        <TableCols :striped="true" :lines="getProperties" />
      </Card>

      <Card title="ExifTool File Metadata">
        <TableCols :striped="true" :lines="getExistProps" />
      </Card>

      <Card title="Submissions">
        <TableCols
          :bordered="true"
          :columns="[
            { title: 'Published' },
            { title: 'Name' },
            { title: 'Source' },
            { title: 'Country' },
          ]"
          :lines="submissions"
        />
      </Card>

      <Card title="Indicators">
        <TableCols
          :bordered="true"
          :columns="[
            { title: 'Description' },
            { title: 'Severity' },
            { title: 'Category' },
            { title: 'Module' },
          ]"
          :lines="[
            [
              'Quoniam mirari posse quosdam',
              '<strong class=\'bg-danger px-4 py-2 rounded-md text-light\'>Malicious</strong>',
              'Anti detection',
              'Quoniam mirari posse quosdam',
            ],
            [
              'alias, summatim causas perstringam',
              '<strong class=\'bg-warning px-4 py-2 rounded-md text-light\'>Suspicious</strong>',
              'Stealthymes',
              'alias, summatim causa',
            ],
            [
              'veritate sponte propria digress',
              '<strong class=\'bg-success px-4 py-2 rounded-md text-light\'>Informative</strong>',
              'Anti detection',
              'veritate sponte propria ',
            ],
          ]"
        />
      </Card>

      <Card title="Virtual Screen">
        <Gallery
          :images="[
            { source: 'https://picsum.photos/800/350?i=' + Math.random() },
            { source: 'https://picsum.photos/800/350?i=' + Math.random() },
            { source: 'https://picsum.photos/800/350?i=' + Math.random() },
            { source: 'https://picsum.photos/800/350?i=' + Math.random() },
            { source: null },
            { source: null },
            { source: null },
            { source: null },
          ]"
        />
      </Card>
    </template>
  </div>
</template>

<script>
import Card from "@/common/components/elements/Card.vue";
import Progress from "@/common/components/Progress.vue";
import TableCols from "@/common/components/tables/TableCols.vue";
import Gallery from "@/common/components/tables/Gallery.vue";
import { submission } from "@/common/data/data.test";
import { scanGetters } from "@/state/helpers";

export default {
  components: {
    Card,
    Progress,
    TableCols,
    Gallery,
  },
  data() {
    return {
      file: null,
      submissions: submission({
        examples: 10,
      }),
    };
  },
  computed: {
    ...scanGetters,
    getProperties() {
      return [
        ...Object.keys(this.file)
          .filter((key) => ["string", "number"].includes(typeof this.file[key]))
          .map((key) => {
            return {
              title: key,
              value: this.file[key],
            };
          }),
        {
          title: "Tags",
          value: this.file.tags,
        },
      ];
    },
    getExistProps() {
      return [
        ...Object.keys(this.file.exif).map((key) => {
          return {
            title: key,
            value: this.file.exif[key],
          };
        }),
      ];
    },
    fileLoaded() {
      console.log("File Loaded ? ", this.file !== null);
      return this.file !== null;
    },
  },
  created() {
    this.file = this.getFileSummary;
    console.log("Component Created ? ", this.file !== null);
  },
};
</script>

<style lang="scss" scoped>
.summary {
  .card {
    @apply my-5;
  }
}
</style>
