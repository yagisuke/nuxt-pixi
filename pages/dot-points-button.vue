<template>
  <div>
    <h1>Dot Points Button</h1>
    <div class="background">
      <button :class="{ 'clicked-link': clicked }" type="button" class="dot-points-button" title="click!" @click="clicked = !clicked">
        <span class="dot" />
        <span class="dot" />
        <span class="dot" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      clicked: false
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
  padding: 0;
  border-radius: 50%;
  border: none;
  background-color: lightpink;
  line-height: 0;
  cursor: pointer;
  outline: none;

  > .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: whitesmoke;
  }
}

.clicked-link {
  > .dot {
    animation: pop-wave 1.3s linear infinite;
  }

  > .dot:nth-child(2) {
    animation-delay: -1.1s;
  }

  > .dot:nth-child(3) {
    animation-delay: -0.9s;
  }
}

@keyframes pop-wave {
  0%,
  60%,
  100% {
    transform: initial;
  }
  30% {
    transform: translateY(-4px) scale(1.4);
    opacity: 0.25;
  }
}
</style>
