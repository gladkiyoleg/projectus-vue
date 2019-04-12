<template>
  <ul class="h-menu">
    <li class="h-menu__item" v-for="(link, index) in links" :key="index">
      <router-link :to="link.path" class="h-menu_link">{{ link.name }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      links: [
        {
          path: "/tasks",
          name: "tasks"
        },
        {
          path: "/kanban",
          name: "kanban"
        },
        {
          path: "/activity",
          name: "activity"
        },
        {
          path: "/calendar",
          name: "calendar"
        },
        {
          path: "/files",
          name: "files"
        }
      ]
    };
  }
};
</script>

<style scoped>
.h-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.h-menu__item {
  display: inline-block;
  margin: 0 0 0 30px;
}
.h-menu_link {
  display: inline-block;
  text-transform: capitalize;
  font-size: 1rem;
  line-height: 19px;
  padding: 14px 0;
  opacity: 0.7;
  color: #131313;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: 0.3s opacity ease-in-out;
}
.router-link-active,
.h-menu_link:hover {
  opacity: 1;
  border-color: #ffc200;
}
</style>

