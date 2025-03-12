<template>
  <ul>
    <li v-for="item in menuItems" :key="item.id">
      <a @click="toggleSubMenu(item)" href="javascript:void(0)">
        {{ item.name }}
      </a>
      <MenuItem v-if="item.children && item.children.length" :menuItems="item.children" v-show="item.isOpen" />
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MenuItem',
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const toggleSubMenu = (item) => {
      item.isOpen = !item.isOpen;
    };

    return {
      toggleSubMenu
    };
  }
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
