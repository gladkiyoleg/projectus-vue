<template>
  <div class="sidebar-menu">
    <div class="sidebar-menu__heading">menu</div>
    <nav class="sidebar-menu__nav">
      <ul class="sidebar-menu__nav-inner">
        <li class="sidebar-menu__item">
          <router-link to="/" class="sidebar-menu__link">Home</router-link>
        </li>
        <li class="sidebar-menu__item">
          <router-link to="/my-tasks" class="sidebar-menu__link">My Tasks</router-link>
        </li>
        <li class="sidebar-menu__item">
          <router-link to="/notifications" class="sidebar-menu__link">Notifications</router-link>
          <span class="sidebar-menu__notification">
            <span class="notification_circle">
							<span class="notification_circle-inner">3</span>
						</span>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar-menu {
  padding: 30px 30px 0;
}
.sidebar-menu__heading {
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #878787;
  text-transform: uppercase;
  padding: 0 0 18px;
}
.sidebar-menu__nav {
}
.sidebar-menu__nav-inner {
  padding: 0;
  margin: 0;
  list-style: none;
}
.sidebar-menu__item {
  margin: 0 0 16px;
}
.sidebar-menu__link {
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: #ffffff;
  text-decoration: none;
}
.sidebar-menu__notification {
  display: inline-block;
  margin: 0 0 0 7px;
}
.notification_circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffc200;
}
.notification_circle-inner {
  width: 8px;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: #131313;
}
</style>