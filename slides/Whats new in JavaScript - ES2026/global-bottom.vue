<template>
  <footer>
    <div class="about-me" v-if="[1,2,20].includes($nav.currentPage)">
      <Homepage/>
    </div>
    <div class="progress" :style="{ width: `${$nav.currentPage * 100 / $nav.total }%` }"></div>
  </footer>
</template>

<style scoped>
.about-me{
  position: absolute;
  right: 50px;
  bottom: 50px;
  z-index: 99;
}

.about-me :is(a, a:hover){
  border: none;
  margin-top: 0.5rem;
}

.progress {
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);
  box-shadow: 0 0 10px #43CBFF;
  transition: width 0.4s ease-in-out;
}
</style>