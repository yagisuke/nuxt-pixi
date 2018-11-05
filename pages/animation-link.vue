<template>
  <div>
    <h1>Animation Link</h1>
    <div class="background">
      <a :class="{ 'clicked-link': clicked }" href="/" class="dot-points-button" @click.prevent="leave">
        GO!!
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      clicked: false
    }
  },
  methods: {
    leave(event) {
      this.clicked = !this.clicked
      const path = event.target.pathname
      setTimeout(() => {
        this.$router.push(path)
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: aquamarine;
}

.dot-points-button {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: pink;
  line-height: 0;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.clicked-link {
  animation: pop-wave 300ms ease-in;
}

@keyframes pop-wave {
  0%,
  60%,
  100% {
    transform: initial;
  }
  30% {
    transform: rotate(25deg) scale(5);
  }
}
</style>
