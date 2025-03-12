<template>
<div>
  <ul>
    <li v-for="item in menuItems" :key="item.path">
      <router-link v-if="!item.children" :to="item.path">{{ item.meta.title }}</router-link>
      <div v-else>
        <a @click="toggleCollapse(item.path)">{{ item.meta.title }}</a>
        <ul v-if="isCollapsed[item.path]">
          <li v-for="child in item.children" :key="child.path">
            <router-link :to="item.path + '' + child.path">{{ child.meta.title }}</router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import { reactive } from 'vue';
const props = defineProps({
  menuItems: {
    type: Array,
    default: () => []
  }
});

const isCollapsed = reactive({});
const toggleCollapse = (path) => {
  isCollapsed[path] = !isCollapsed[path];
};


</script>



<style scoped>
.sub-menu {
  margin-left: 1.5em;
  border-left: 1px solid #e0e0e0;
  padding-left: 1em;
}

.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #fff;
  overflow-y: auto;
}
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
