<script>
  export default {
    name: "Navbar"
  }
</script>

<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Mi Nueva Pestaña</li>
          <li><router-link to="home">Home</router-link></li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">

        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  width: 100%;
  }
</style>