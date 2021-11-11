<template>
  <footer>
    <div class="about-me" v-if="[1,2].includes($slidev.nav.currentPage)">
      <Homepage/>
      <Twitter/>
    </div>
    <div class="progress" :style="{ width: `${$slidev.nav.currentPage * 100 / $slidev.nav.total }%` }"></div>
  </footer>
</template>

<style scoped>
.about-me{
  position: absolute;
  right: 50px;
  bottom: 50px;
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
  background: orangered;
  box-shadow: 0 0 10px orangered;
  transition: width 0.4s ease-in-out;
}
</style>