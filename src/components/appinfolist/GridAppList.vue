<template>
  <a-list :grid="{ gutter: 16, column: 2 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item   >
        <a-card :title="item.title"  >
          <li v-for="(itemvalue,index) in getitems(item.title)" :key="index">
            <a-tag color="blue">{{itemvalue.name}}</a-tag>
          </li>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
   <p>Request Data: {{ reqdata }}</p>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import axiosInstance from '@/utils/axios.ts'; // 根据你的文件路径调整导入路径
import { Item } from 'ant-design-vue/es/menu';
import { onMounted } from 'vue';
const reqdata = ref(null);
let str='{ "channels1": [ { "id": 0, "name": "推荐" }, { "id": 1, "name": "html" }, { "id": 2, "name": "开发者资讯" }, { "id": 4, "name": "c++" }, { "id": 6, "name": "css" }, { "id": 7, "name": "数据库" }, { "id": 8, "name": "区块链" }, { "id": 9, "name": "go" }, { "id": 10, "name": "产品" }, { "id": 11, "name": "后端" }, { "id": 12, "name": "linux" }, { "id": 13, "name": "人工智能" }, { "id": 14, "name": "php" }, { "id": 15, "name": "javascript" }, { "id": 16, "name": "架构" }, { "id": 17, "name": "前端" }, { "id": 18, "name": "python" }, { "id": 19, "name": "java" }, { "id": 20, "name": "算法" }, { "id": 21, "name": "面试" }, { "id": 22, "name": "科技动态" }, { "id": 23, "name": "js" }, { "id": 24, "name": "设计" }, { "id": 25, "name": "数码产品" }, { "id": 26, "name": "软件测试" } ] , "channels2": [ { "id": 0, "name": "推荐" }, { "id": 1, "name": "html" }, { "id": 2, "name": "开发者资讯" }, { "id": 4, "name": "c++" }, { "id": 6, "name": "css" }, { "id": 7, "name": "数据库" }, { "id": 8, "name": "区块链" }, { "id": 9, "name": "go" }, { "id": 10, "name": "产品" }, { "id": 11, "name": "后端" }, { "id": 12, "name": "linux" }, { "id": 13, "name": "人工智能" }, { "id": 14, "name": "php" }, { "id": 15, "name": "javascript" }, { "id": 16, "name": "架构" }, { "id": 17, "name": "前端" }, { "id": 18, "name": "python" }, { "id": 19, "name": "java" }, { "id": 20, "name": "算法" }, { "id": 21, "name": "面试" }, { "id": 22, "name": "科技动态" }, { "id": 23, "name": "js" }, { "id": 24, "name": "设计" }, { "id": 25, "name": "数码产品" }, { "id": 26, "name": "软件测试" } ] }';
let obj = JSON.parse(str);

interface DataItem {
  title: string;
}
const data =ref([]) as Ref<DataItem[]>;
onMounted(() => {
  console.log('组件已挂载到DOM');
  get();
  // 在这里执行你的DOM操作或初始化代码
});
 const get = function() {
    for(let key in obj)
    {
      data.value.push({title:key});
     console.log(data.value);
    }
 }


 const getitems = function(key:string) {
    for(let key in obj)
    {
     return obj[key];
    }
 }




</script>
<style scoped>
.ant-list-item {
  padding: 12px;
  font-size: 14px;
  color: red  ;
}
</style>

