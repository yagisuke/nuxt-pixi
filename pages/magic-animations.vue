<template>
  <div>
    <h1>Magic Animations</h1>
    Reference:
    <a href="https://minimamente.com/example/magic_animations/" target="_blank">
      <cite>https://minimamente.com/example/magic_animations/</cite>
    </a>
    <div class="page">
      <div :style="{ backgroundImage: `url(${$router.options.base}magic/snow-1.png)` }" class="circle">
        <div :class="{ 'guru-n': start }" class="box top-left">HOT</div>
        <div :class="{ 'masakari': start }" class="box top-right">MOT</div>
        <div :class="{ 'shuwacchi': start }" class="box bottom-left">OBENTO</div>
        <div :class="{ 'piropiropii': start }" class="box bottom-right">TABETAI</div>
        <nuxt-link to="/" class="cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      start: false
    }
  },
  mounted: function() {
    setInterval(() => {
      setTimeout(() => (this.start = true), 250)
      setTimeout(() => (this.start = false), 1500)
    }, 2000)
  }
}
</script>

<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 600px;
  background-color: #1099bb;
  overflow: hidden;
}

.circle {
  position: relative;
  margin: auto;
  width: 300px;
  height: 300px;
  background-color: white;
  background-size: cover;
  border: 1px solid white;
  border-radius: 50%;
}

.box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: #ff7473;
  color: white;
  font-size: 32px;
  border-radius: 10px;
  animation-duration: 1s;
  animation-fill-mode: both;
}

.top-left {
  position: absolute;
  top: -25px;
  left: -25px;
}

.top-right {
  position: absolute;
  top: -25px;
  right: -25px;
}

.bottom-left {
  position: absolute;
  bottom: -25px;
  left: -25px;
}

.bottom-right {
  position: absolute;
  bottom: -25px;
  right: -25px;
}

.cover {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.guru-n {
  animation-name: guru-n;
}

.masakari {
  animation-name: masakari;
}

.shuwacchi {
  animation-name: shuwacchi;
}

.piropiropii {
  animation-name: piropiropii;
}

@keyframes guru-n {
  0% {
    opacity: 1;
    transform-origin: 100% 200%;
    transform: scale(1, 1) rotate(0);
  }
  100% {
    opacity: 0;
    transform-origin: 200% 500%;
    transform: scale(0, 0) rotate(270deg);
  }
}

@keyframes masakari {
  0% {
    opacity: 0;
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }
  30% {
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scale(1, 1) rotate(0) translateY(0);
  }
}

@keyframes shuwacchi {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
}

@keyframes piropiropii {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%);
  }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
}
</style>
