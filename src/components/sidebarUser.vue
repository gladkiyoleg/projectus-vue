<template>
  <div>
    <div class="sidebar-info">
      <div class="sidebar-info__avatar avatar_circle">
        <img v-bind:src="image" :alt="name" />
      </div>
      <div class="sidebar-info__data">
        <div class="sidebar-info__name">{{ name }}</div>
        <div class="sidebar-info__pos">{{ position }}</div>
      </div>
      <button class="sidebar-info__more icon_more"></button>
    </div>
    <div class="sidebar-stats">
      <div class="sidebar-stats__col">
        <div class="sidebar-stats__val">{{ completed }}</div>
        <div class="sidebar-stats__prop">Completed Tasks</div>
      </div>
      <div class="sidebar-stats__col">
        <div class="sidebar-stats__val">{{ opened }}</div>
        <div class="sidebar-stats__prop">Open Tasks</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Jean Gonzales',
			position: 'Product Owner',
			image: 'https://image.flaticon.com/icons/svg/145/145862.svg',
			completed: 372,
			opened: 11
		}
	}
};
</script>

<style>
.sidebar-info {
  display: flex;
  align-items: center;
  background-color: #202020;
  padding: 16px 20px 16px 30px;
}
.sidebar-info__avatar {
  width: 48px;
  height: 48px;
  background-color: #fff;
}
.sidebar-info__data {
  padding-left: 15px;
  width: calc(100% - 78px);
}
.sidebar-info__name {
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #ffffff;
  margin: 0 0 2px;
}
.sidebar-info__pos {
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #9b9b9b;
}
.sidebar-info__more {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
}
.sidebar-stats {
  display: flex;
  padding: 20px 30px 0;
}
.sidebar-stats__col {
  width: 50%;
}
.sidebar-stats__val {
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
}
.sidebar-stats__prop {
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>