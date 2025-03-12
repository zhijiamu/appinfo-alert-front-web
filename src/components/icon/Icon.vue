<template>
  <ul>
     <li v-for="item in menuItems" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<script setup lang="ts">
     const menuItems = [
        { id: 1, name: '首页' },
        { id: 2, name: '关于我们' },
        { id: 3, name: '联系' }
      ]
</script>
<style scoped>
</style>
