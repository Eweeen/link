<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Lack";
  src: url("@/assets/fonts/Lack-Regular.otf");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  font-family: "Lack", sans-serif;
}
*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #fff;
}
*::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 999px;
}
</style>
