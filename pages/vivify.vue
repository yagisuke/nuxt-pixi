<template>
  <div>
    <h1>Vivify</h1>
    Reference:
    <a href="http://vivify.mkcreative.cz/" target="_blank">
      <cite>http://vivify.mkcreative.cz/</cite>
    </a>
    <div class="page">
      <div :style="{ backgroundImage: `url(${$router.options.base}vivify/safe.png)` }" class="circle">
        <div v-if="start1" class="box top-left pop-in">HONO</div>
        <div v-if="start2" class="box top-right unfold">BONO</div>
        <div v-if="start3" class="box bottom-left jump-in-left">OBENTO</div>
        <div v-if="start4" class="box bottom-right flip-in-x">TABETAI</div>
        <nuxt-link to="/" class="cover" />
      </div>
      <div :style="{ backgroundImage: `url(${$router.options.base}vivify/stadium.png)` }" class="circle">
        <div v-if="start4" class="box top-left hit-left">HONO</div>
        <div v-if="start3" class="box top-right pull-up">BONO</div>
        <div v-if="start2" class="box bottom-left flip-in-y">OBENTO</div>
        <div v-if="start1" class="box bottom-right pop-in-left">TABETAI</div>
        <nuxt-link to="/" class="cover" />
      </div>
    </div>
    <pre style="margin-top: 16px;">
      MIT License

      Copyright (c) 2017 Martin Knize

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
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

.pop-in {
  animation-name: popIn;
}

.unfold {
  animation-name: unfold;
}

.jump-in-left {
  animation-name: jumpInLeft;
}

.flip-in-x {
  animation-name: flipInX;
}

.flip-in-y {
  animation-name: flipInY;
}

.pull-up {
  animation-name: pullUp;
}

.hit-left {
  animation-name: hitLeft;
}

.pop-in-left {
  animation-name: popInLeft;
}

@keyframes popIn {
  0% {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  40% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(1.08, 1.08, 1.08);
  }
  60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1, 1, 1);
  }
  80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes unfold {
  0% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(0, 0, 0);
  }
  30% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: scale3d(0.4, 0.4, 1);
  }
  60% {
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: scale3d(0.4, 1, 1);
  }
  100% {
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes jumpInLeft {
  0% {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5) rotate(-90deg);
  }
  50% {
    opacity: 1;
    transform: scale3d(1.2, 1.2, 1.2) rotate(10deg);
  }
  70% {
    transform: scale3d(0.9, 0.9, 0.9) rotate(-5deg);
  }
  90% {
    transform: scale3d(1, 1, 1) rotate(0deg);
  }
}

@keyframes flipInX {
  from {
    opacity: 0;
    transform: perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2);
  }
  50% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: perspective(400px) rotateX(-20deg) scale3d(1, 1, 1);
  }
  to {
    transform: perspective(400px) rotateX(0deg) scale3d(1, 1, 1);
  }
}

@keyframes flipInY {
  from {
    opacity: 0;
    transform: perspective(400px) rotateY(90deg) scale3d(1.2, 1.2, 1.2);
  }
  50% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: perspective(400px) rotateY(-20deg) scale3d(1, 1, 1);
  }
  to {
    transform: perspective(400px) rotateY(0deg) scale3d(1, 1, 1);
  }
}

@keyframes pullUp {
  0% {
    transform: scale3d(0, 0, 0);
  }
  30% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: scale3d(1, 0, 1);
    transform-origin: center bottom;
  }
  100% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes hitLeft {
  0% {
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transform: translateX(0);
  }
  40% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: translateX(20px) rotate(4deg);
  }
}

@keyframes popInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-200px, 0, 0) scale3d(0.1, 0.1, 0.1);
  }
  40% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08);
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
  }
  60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1, 1, 1);
  }
  80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
}
</style>
