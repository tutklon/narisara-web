<template lang="pug">
  .header
    nav
      button.menu-btn Gizle
    div
      h1 Menu
</template>

<style scoped>
.header {
  height: 100vh;
  width: 300px;
  padding: 40px;
  text-align: center;
  justify-content: center;
  background: url('@/static/assets/mainmenu/menucerceve2.png') no-repeat center;
  background-size: 100% 100%;
  position: fixed;
  right: 0;
}
nav {
  @apply flex justify-end mx-2 mb-5;
}
.menu-btn {
  @apply py-2 border-b-4 border-rose-500; 
}
</style>