<template>
  <div>
    <h1>多级菜单示例</h1>
    <side-menu :menuItems="menuRoutes" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SideMenu from '../components/menu/SideMenu.vue';
const router = useRouter()
interface RouteItem {
  path: string;
  name: string;
  meta: {
    title: string;
    icon: string;
    hidden: boolean;
  };
  children?: RouteItem[];
}
const menuRoutes = computed(() => {
  return router.options.routes.filter(route => {
    return !route.meta.hidden && (route.children ? route.children.some(child => !child.meta.hidden) : true)
  })
});

</script>

<style>

</style>
