<template>
  <div class="page">
    <button type="button" class="ring-button">ボタン</button>
    <nuxt-link to="/" class="ring-button">ボタン</nuxt-link>
  </div>  
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 300px;
  background-color: darkgreen;
}

.ring-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  border: 1px solid aquamarine;
  border-radius: 100px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: bold;
  color: darkgreen;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid white;
    border-radius: 50%;
  }

  &:active,
  &:focus {
    outline: none;
    animation-name: bounce;
    animation-duration: 1s;
    opacity: 0.75;
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

a,
button {
  margin: 0 30px;
  padding: 0;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
}
</style>
