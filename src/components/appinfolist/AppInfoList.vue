<template>
  <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
  <a-list bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item class="ant-list-item">{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>

  <p>Request Data: {{ reqdata }}</p>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import axiosInstance from '@/utils/axios.ts'; // 根据你的文件路径调整导入路径
const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const reqdata = ref(null);
axiosInstance.get('/v1_0/channels')
  .then(response => {
    reqdata.value = response.data;
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

</script>
<style scoped>
.ant-list-item {
  padding: 12px;
  font-size: 14px;
  color: red  ;
}
</style>

