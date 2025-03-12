<template>
  <div>
    <h1>多级菜单示例</h1>
    <MenuItemNew :menuItems="menuData" />
  </div>
</template>

<script setup>
import MenuItemNew from './MenuItemNew.vue';
const   menuData = [
        {
          id: 1,
          name: '菜单1',
          isOpen: false,
          children: [
            {
              id: 2,
              name: '子菜单1-1',
              isOpen: false,
              children: [
                {
                  id: 3,
                  name: '子菜单1-1-1',
                  isOpen: false
                }
              ]
            },
            {
              id: 4,
              name: '子菜单1-2',
              isOpen: false
            }
          ]
        },
        {
          id: 5,
          name: '菜单2',
          isOpen: false,
          children: [
            {
              id: 6,
              name: '子菜单2-1',
              isOpen: false
            }
          ]
        }
      ]

</script>

<style>
/* 添加全局样式 */
body {
  font-family: Arial, sans-serif;
}
</style>
