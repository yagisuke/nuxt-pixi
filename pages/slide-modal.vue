<template>
  <div id="slide-modal">
    <div class="button-container">
      <button type="button" class="open-button" @click="showModal">
        Open
      </button>
    </div>
    <transition name="slide">
      <div v-if="visibilty" class="modal">
        <div class="modal-inner">
          <p>This is a modal.</p>
          <button type="button" class="close-button" @click="hideModal">
            Close
          </button>
        </div>
      </div>
    </transition>
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

<style>
#slide-modal {
  overflow: hidden;
  color: gray;
}

#slide-modal .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: aqua;
}

#slide-modal .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  display: flex;
  background-color: coral;
  justify-content: center;
  align-items: center;
}

#slide-modal .modal-inner {
  position: relative;
  width: 80%;
  height: 300px;
  background-color: beige;
  border: 3px solid gray;
  padding: 30px;
}

#slide-modal button {
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
}

#slide-modal .close-button {
  position: absolute;
  top: -40px;
  right: -40px;
}

#slide-modal .slide-enter-active,
#slide-modal .slide-leave-active {
  transition: transform 0.25s ease-out;
}

#slide-modal .slide-enter,
#slide-modal .slide-leave-to {
  transform: translateX(-100%);
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
