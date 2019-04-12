<template>
  <div class="task-item" v-if="count < 10">
    <div class="task-item__icon">
      <div class="task-item__icon-inner" :class="getTypeIcon(item.completed)"></div>
    </div>
    <div class="task-item__text">
      <p class="paragraph">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: Object,
    count: Number
  },
  methods: {
    getTypeIcon(type) {
      return type ? "icon_check" : "icon_uncheck";
    }
  }
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  margin: 30px 0;
}
.task-item__icon {
  display: flex;
  flex-basis: 60px;
  flex-shrink: 0;
}
.task-item__icon-inner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.task-item__text {
  display: flex;
}
</style>