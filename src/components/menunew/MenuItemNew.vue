<template>
  <ul>
    <li v-for="item in newMenuItems" :key="item.id">
      <a @click="toggleSubMenu(item)" href="javascript:void(0)">
        {{ item.name }}
      </a>
      <MenuItemNew v-if="item.children && item.children.length" :menuItems="item.children" v-show="item.isOpen" />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
// 定义 props
const menuItems = defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
const newMenuItems = ref(JSON.parse(JSON.stringify(menuItems.menuItems)));
const toggleSubMenu = (item) => {
console.log(menuItems.menuItems)
  item.isOpen = !item.isOpen;
};

</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  margin: 5px 0;
}

a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
