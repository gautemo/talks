<template>
  <span class="heart">JS</span>
</template>

<style scoped>
.heart {
  animation: 15s infinite beatHeart;
  position: absolute;
  top: 50px;
  left: 50px;
  width: 150px;
  height: 125px;
  font-size: 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: bold;
}
.heart:before,
.heart:after {
  position: absolute;
  z-index: -1;
  content: "";
  left: 75px;
  top: 0;
  width: 75px;
  height: 125px;
  background: #f7df1e;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
@keyframes beatHeart {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>