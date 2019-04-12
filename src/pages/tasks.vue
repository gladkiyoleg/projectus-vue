<template>
	<div class="container__inner">
		<preloader v-if="loading"/>
		<template v-else>
			<tasksItem 
				v-for="(item, index) in list" 
				:key="index" 
				:item="item"
				:count="index"></tasksItem>
		</template>
	</div>
</template>

<script>
import tasksItem from "@/components/tasksItem";
import preloader from "@/components/preloader";
import axios from "axios";

export default {
  data() {
    return {
			list: null,
			loading: true
    };
  },
  components: {
		tasksItem,
		preloader
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => (this.list = response.data))
			.catch(error => console.error(error))
			.finally(() => this.loading = false)
  }
};
</script>

<style>
</style>