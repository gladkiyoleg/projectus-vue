<template>
  <div class="container__inner">
    <h3 class="activity-heading">{{ title }}</h3>
    <activityItem 
			v-for="(item, index) in items" 
			:item="item"
			:key="index">
		</activityItem>
  </div>
</template>

<script>
import activityItem from '@/components/activityItem.vue'
export default {
	data() {
		return {
			title: 'today',
			items: [
				{type: 1, text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users', date: new Date(2019, 2, 30, 20, 40)},
				{type: 2, text: 'Emilee Simchenko commented on Account for teams and personal in bottom style', date: new Date(2019, 2, 30, 19, 32)},
				{type: 3, text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes'},
				{type: 4, text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects', attachments: ['https://via.placeholder.com/100','https://via.placeholder.com/100','https://via.placeholder.com/100','https://via.placeholder.com/100'], date: new Date(2019, 2, 30, 18, 2)}
			]
		}
	},
	components: {
		activityItem
	}
};
</script>

<style>
.container__inner {
  width: 100%;
  max-width: 730px;
  padding: 35px 30px;
  border-radius: 8px;
  background-color: #fff;
}
.activity-heading {
  margin: 0;
  opacity: 0.5;
  font-size: 0.875rem;
  text-transform: uppercase;
}
</style>