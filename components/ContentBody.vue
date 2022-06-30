<script>
export default {
  name: 'ContentBody',
}
</script>
<template lang="pug">
.ContentBody
  img(src="../static/img.jpg")
</template>
<style lang="scss" scoped>
.ContentBody {
  width: 1150px;
  height: 250px;
  background: url('../static/assets/mainpage/mainpage1.png') no-repeat center center;
  background-size: 100% 100%;
  img {
    max-width: 270px;
    height: 200px;
    position: relative;
    left: 30px;
    top: 25px;
    z-index: -1;
    &:hover {
      transform: scale(1.1);
    }
  }
}
.content {
  background-size: 100% 100%;
  height: 250px;
  position: absolute;
}
</style>