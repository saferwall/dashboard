<template>
  <scan-content class="summary">
    <Card>
      <Progress />
    </Card>

    <Card title="Basic Properties">
      <TableCols :striped="true" :lines="[{title:'Size', value:'1 MB'} ,{title:'CRC32', value:'CRC320xa12a8ab6'}]" />
    </Card>
    
    <Card title="ExifTool File Metadata">
      <TableCols :striped="true" :lines="[{title:'Character Set', value:'ASCII'} ,{title:'Code Size', value:'24064'}]" />
    </Card>
    
    <Card title="Submissions">
        <TableCols :bordered="true" :columns="[{title:'Published'}, {title:'Name'} , {title:'Source'} , {title:'Country'}]"  :lines=" [
            ['2020-12-28 09:18:15','ModbusPollSetup32Bit.exe','Web','Morocco'],
            ['2020-12-28 10:09:50','ModbusPollSetup32Bit.exe',null,'Morocco'],
            ['2020-12-28 12:12:01','ModbusPollSetup32Bit.exe','Api','France'],
          ]"/>
    </Card>
    
    <Card title="Indicators">
        <TableCols :bordered="true" :columns="[{title:'Description'}, {title:'Severity'} , {title:'Category'} , {title:'Module'}]"  :lines=" [
            ['Quoniam mirari posse quosdam','<strong class=\'bg-danger px-4 py-2 rounded-md text-light\'>Malicious</strong>','Anti detection','Quoniam mirari posse quosdam'],
            ['alias, summatim causas perstringam','<strong class=\'bg-warning px-4 py-2 rounded-md text-light\'>Suspicious</strong>','Stealthymes','alias, summatim causa'],
            ['veritate sponte propria digress','<strong class=\'bg-success px-4 py-2 rounded-md text-light\'>Informative</strong>','Anti detection','veritate sponte propria '],
          ]"/>
    </Card>

    <Card title="Virtual Screen">
      <Gallery :images="[{ source: 'https://picsum.photos/800/350?i='+Math.random() } , { source: 'https://picsum.photos/800/350?i='+Math.random() } , { source: 'https://picsum.photos/800/350?i='+Math.random() } , { source: 'https://picsum.photos/800/350?i='+Math.random() } ,  { source: null } , { source : null } , { source: null } , { source : null }]"/>
    </Card>
  </scan-content>
</template>

<script>
import Card from "@/components/shared/elements/Card.vue";
import Progress from "@/components/shared/Progress.vue";
import TableCols from "@/components/shared/tables/TableCols.vue";
import Gallery from "@/components/shared/tables/Gallery.vue";
import ScanContent from '../../components/partials/page/ScanContent.vue';

export default {
  name: "Home",
  components: { Card, Progress, TableCols, Gallery, ScanContent },
};
</script>

<style lang="scss" scoped>
.summary {
  .card{
    @apply my-5;
  }
}
</style>
