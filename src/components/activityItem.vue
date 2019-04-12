<template>
  <div class="activity-item">
    <div class="activity-item__icon">
      <div class="activity-item__icon-inner" :class="getTypeIcon(item.type)"></div>
    </div>
    <div class="activity-item__text" :class="item.type === 3 ? 'activity-item__text_quote' : ''">
      <p class="paragraph">{{ item.text }}</p>
      <div class="activity-item__imgs" v-if="item.attachments">
        <div
          class="activity-item__img"
          v-for="(attachment, index) in item.attachments"
          :key="index"
        >
          <img :src="item.attachments[index]"  alt="attachment">
        </div>
      </div>
    </div>
    <div class="activity-item__date">
      <span class="activity-item__date-inner">{{ item.date | dateToFormat }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: Object
  },
  methods: {
    getTypeIcon(type) {
      switch (type) {
        case 1:
          return "icon_check";
        case 2:
          return "icon_comment";
        case 4:
          return "icon_download";
      }
		}
  },
  filters: {
    dateToFormat: function(date) {
      return date
        ? date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          })
        : "";
    }
  }
};
</script>

<style>
.activity-item {
  display: flex;
  align-items: flex-start;
  margin: 30px 0;
}
.activity-item__icon {
  display: flex;
  flex-basis: 60px;
  flex-shrink: 1;
}
.activity-item__icon-inner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.activity-item__text {
  display: flex;
  flex-direction: column;
  flex: 1 1 1em;
  padding: 0 6em 0 0;
}
.activity-item__text_quote {
  padding: 0;
}
.activity-item__text_quote .paragraph {
  width: 100%;
  background-color: #f7f6f3;
  border-radius: 10px;
  font-size: 0.9375rem;
  line-height: 1.125rem;
  padding: 20px 30px;
}
.activity-item__imgs {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
}
.activity-item__img {
  width: 100%;
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 10px 10px 0;
}
.activity-item__img img {
  max-width: 100%;
}
.activity-item__date {
  display: flex;
  justify-content: flex-end;
  flex-basis: 58px;
  flex-shrink: 1;
  padding: 0 0 0 5px;
}
.activity-item__date-inner {
  opacity: 0.7;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
