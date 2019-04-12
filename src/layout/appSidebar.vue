<template>
  <aside class="page-sidebar">
    <div class="sidebar-top">
      <div class="sidebar-top__logo">
        <img src="../assets/img/sidebar-logo.svg" class="sidebar-top__img">
        <div class="sidebar-top__title">projectus</div>
      </div>
      <sidebarSearch></sidebarSearch>
    </div>
    <sidebarUser></sidebarUser>
    <sidebarMenu></sidebarMenu>
  </aside>
</template>
<script>
import sidebarMenu from '@/components/sidebarMenu.vue'
import sidebarUser from '@/components/sidebarUser.vue'
import sidebarSearch from '@/components/sidebarSearch.vue'
export default {
	components: {
		sidebarMenu,
		sidebarUser,
		sidebarSearch
	}
};
</script>

<style>
.sidebar-top{
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.sidebar-top__logo{
	display: flex;
	align-items: center;
}
.sidebar-top__img{
	margin: 0 13px 0 0;
}
.sidebar-top__title{
	font-size: 1rem;
	line-height: 1.5rem;
	color: #FFFFFF;
	text-transform: uppercase;
}
</style>
