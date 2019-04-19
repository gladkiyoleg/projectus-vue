<template>
	<appLayout> 
		<div class="page" id="app">
			<appSidebar></appSidebar>
			<div class="page-main">
				<appHeader></appHeader>
				<main class="container">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</main>
			</div>
		</div>
	</appLayout>
</template>

<script>
import appHeader from "@/layout/appHeader";
import appSidebar from "@/layout/appSidebar";
import appLayout from "@/layout/appLayout";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader,
		appSidebar,
		appLayout
  }
};
</script>