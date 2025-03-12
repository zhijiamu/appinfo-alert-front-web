<template>
  <h1>Tabs</h1>
  <a-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</a-tab-pane>
    </a-tabs>


 <h2>Grouped Tabs</h2>
 <a-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
    >
      <a-tab-pane v-for="(value,index) in reversedMessage(str)" :key="index" :tab="'tab-' + index">
     <li v-for="(item,index) in value" :key="index">{{item.name}}-{{item.ip}}-{{item.clustername}}<></li>
      </a-tab-pane>
    </a-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import type { TabsProps } from 'ant-design-vue';
const mode = ref<TabsProps['tabPosition']>('top');

interface AppInfo {
  name: string;
  ip: string;
  clustername: string;
}
const activeKey = ref('1');
const str: AppInfo[] = [
  { "name":"pboc-extractor", "ip": "10.166.204.56:7819", "clustername":"p1" },
  { "name": "bastard-manager", "ip": "10.166.204.56:7819", "clustername":"p1" },
  { "name": "credit-sensitive-detection", "ip": "10.166.204.56:7819", "clustername":"p1" },
  { "name": "goodsmanage", "ip": "10.166.204.56:7819", "clustername":"p1" },
  { "name": "pboc-extractor", "ip": "10.166.204.56:7819", "clustername":"stg" },
  { "name": "bastard-manager", "ip": "10.166.204.56:7819", "clustername":"stg"},
  { "name": "credit-sensitive-detection", "ip": "10.166.204.56:7819", "clustername":"stg"},
  { "name": "goodsmanage", "ip": "10.166.204.56:7819", "clustername":"stg"},
]
const reversedMessage= function(str: AppInfo[]): AppInfo[] {
  const groupedData = {};
  // 遍历每个元素进行分组
  str.forEach(element => {
    const clustername = element.clustername;

  // 检查分组对象中是否已存在该属性
  if (!groupedData.hasOwnProperty(clustername)) {
    // 如果不存在，则创建一个新的属性，并将当前元素添加到数组中
    groupedData[clustername] = [element];
  } else {
    // 如果已存在，则直接将当前元素添加到数组中
    groupedData[clustername].push(element);
  }
});
console.log(groupedData);
return groupedData;
}

onMounted(() => {
  console.log(reversedMessage(str));
});

const callback: TabsProps['onTabScroll'] = val => {
  console.log(val);
};

</script>
