<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Icon from './components/icon/Icon.vue'
import AppInfoListView from './views/AppInfoListView.vue';
import GridAppInfo from './components/appinfolist/GridAppList.vue';
import Tabs from './components/appinfolist/tabs/Tabs.vue';
import SideMenuView from './views/SideMenuView.vue';
import UserGroupList from './components/grouplist/UserGroupList.vue';
import Modal from './components/chat/Modal.vue'
</script>
<template>
<UserGroupList></UserGroupList>
<Modal></Modal>
</template>

<!-- <template>
  <div class="container" style="height: 100vh;">
    <SideMenuView>  </SideMenuView>
   </div>
  <div>
     <router-view></router-view>
    </div>
</template> -->

<style scoped>
/* 添加全局样式 */
body {
  font-family: Arial, sans-serif;
}

</style>
