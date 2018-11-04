<template>
  <div>
    <h1>Slide Modal</h1>
    <p>This project is transition sample.</p>
    <div class="slide-modal">
      <div class="button-container">
        <button type="button" class="open-button" @click="showModal">Open</button>
      </div>
      <transition name="slide">
        <div v-if="visibilty" class="modal">
          <div class="modal-inner">
            <p>This is a modal.</p>
            <button type="button" class="close-button" @click="hideModal">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      visibilty: false
    }
  },
  methods: {
    showModal: function() {
      this.visibilty = true
    },
    hideModal: function() {
      this.visibilty = false
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-modal {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: aqua;
  overflow: hidden;
}

.open-button {
  @extend %button;
}

.close-button {
  @extend %button;

  position: absolute;
  top: -40px;
  right: -40px;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  display: flex;
  background-color: coral;
  justify-content: center;
  align-items: center;
  color: gray;

  .modal-inner {
    position: relative;
    width: 80%;
    height: 300px;
    background-color: beige;
    border: 3px solid gray;
    padding: 30px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

%button {
  width: 80px;
  height: 80px;
  background-color: white;
  border: 3px solid gray;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  color: gray;
  animation-name: zoom-in;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  cursor: pointer;
  outline: none;

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes zoom-in {
  from {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0.95, 0.95) rotate(-5deg);
  }
}
</style>
