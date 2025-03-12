<template>
<li get-items="getitems" v-for="(itemvalue,index) in getitems(item.title)" :key="index">
  <a-tag color="blue">{{itemvalue.name}}</a-tag>
</li>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

interface Item {
  id: number;
  name: string;
}

const props = defineProps({
  item: {
    type: Object as () => Item,
    required: true,
  },
  getitems: {
    type: Function as () => (title: string) => string[],
    required: true,
  },
});
</script>
