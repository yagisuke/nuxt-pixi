<template>
  <div>
    <h1>Magic Animations</h1>
    Reference:
    <a href="https://minimamente.com/example/magic_animations/" target="_blank">
      <cite>https://minimamente.com/example/magic_animations/</cite>
    </a>
    <div class="page">
      <div :style="{ backgroundImage: `url(${$router.options.base}magic-animations/snow-1.png)` }" class="circle">
        <div v-if="start1" class="box top-left puff-in">HONO</div>
        <div v-if="start2" class="box top-right vanish-in">BONO</div>
        <div v-if="start3" class="box bottom-left swash-in">OBENTO</div>
        <div v-if="start4" class="box bottom-right boing-in-up">TABETAI</div>
        <nuxt-link to="/" class="cover" />
      </div>
      <div :style="{ backgroundImage: `url(${$router.options.base}magic-animations/snow-2.png)` }" class="circle">
        <div v-if="start4" class="box top-left space-in-down">HONO</div>
        <div v-if="start3" class="box top-right perspective-right-return">BONO</div>
        <div v-if="start2" class="box bottom-left perspective-left-return">OBENTO</div>
        <div v-if="start1" class="box bottom-right space-in-up">TABETAI</div>
        <nuxt-link to="/" class="cover" />
      </div>
    </div>
    <pre style="margin-top: 16px;">
      Magic - Ver 1.3.0 - https://minimamente.com
      Licensed under the MIT license
      Copyright (c) 2018 Christian Pucci
    </pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      start1: false,
      start2: false,
      start3: false,
      start4: false
    }
  },
  mounted: function() {
    console.log("magic")
    this.showBox()

    setInterval(() => {
      this.showBox()
    }, 8500)
  },
  methods: {
    showBox: function() {
      setTimeout(() => (this.start1 = true), 0)
      setTimeout(() => (this.start1 = false), 2500)
      setTimeout(() => (this.start2 = true), 2000)
      setTimeout(() => (this.start2 = false), 4500)
      setTimeout(() => (this.start3 = true), 4000)
      setTimeout(() => (this.start3 = false), 6500)
      setTimeout(() => (this.start4 = true), 6000)
      setTimeout(() => (this.start4 = false), 8500)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
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
  animation-fill-mode: none;
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

.puff-in {
  animation-name: puffIn;
}

.vanish-in {
  animation-name: vanishIn;
}

.swash-in {
  animation-name: swashIn;
}

.boing-in-up {
  animation-name: boingInUp;
}

.space-in-down {
  animation-name: spaceInDown;
}

.perspective-right-return {
  animation-name: perspectiveRightReturn;
}

.perspective-left-return {
  animation-name: perspectiveLeftReturn;
}

.space-in-up {
  animation-name: spaceInUp;
}

@keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}

@keyframes vanishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(90px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}

@keyframes swashIn {
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

@keyframes boingInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(-90deg);
  }
  50% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(50deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(0deg);
  }
}

@keyframes spaceInDown {
  0% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scale(0.2) translate(0%, 200%);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%);
  }
}

@keyframes perspectiveRightReturn {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg);
  }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg);
  }
}

@keyframes perspectiveLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg);
  }
}

@keyframes spaceInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%);
  }
}
</style>
