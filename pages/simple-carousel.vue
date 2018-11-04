<template>
  <div>
    <h1>Simple Carousel</h1>
    <p>This project is transition-group sample.</p>
    <div class="container">
      <transition-group name="bk" tag="div">
        <img v-if="index === 1" key="image1" :src="`${$router.options.base}simple-carousel/shimane.jpg`" width="640" alt="国賀海岸（赤尾展望台）">
        <img v-if="index === 2" key="image2" :src="`${$router.options.base}simple-carousel/fukushima.jpg`" width="640" alt="毘沙門沼（五色沼湖沼群）の秋">
        <img v-if="index === 3" key="image3" :src="`${$router.options.base}simple-carousel/nagano.jpg`" width="640" alt="硫黄岳 爆裂火口">
      </transition-group>
      <button type="button" class="button prev-button" @click="prev">PREV</button>
      <button type="button" class="button next-button" @click="next">NEXT</button>
    </div>
    <pre style="margin-top: 16px; white-space: pre-wrap;">
      画像は、https://search.find47.jp/jaから。
      1枚目: 国賀海岸（赤尾展望台） © スタジオ・フェイス クリエイティブ・コモンズ・ライセンス（表示4.0 国際）https://creativecommons.org/licenses/by/4.0/
      2枚目: 毘沙門沼（五色沼湖沼群）の秋 © Koichi-Hayakawa クリエイティブ・コモンズ・ライセンス（表示4.0 国際）https://creativecommons.org/licenses/by/4.0/
      3枚目: 硫黄岳 爆裂火口 © 茅野市 クリエイティブ・コモンズ・ライセンス（表示4.0 国際）https://creativecommons.org/licenses/by/4.0/
    </pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      maxIndex: 3,
      index: 1
    }
  },
  methods: {
    prev: function() {
      if (1 >= this.index) {
        this.index = this.maxIndex
      } else {
        this.index -= 1
      }
    },
    next: function() {
      if (this.index >= this.maxIndex) {
        this.index = 1
      } else {
        this.index += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 640px;
  height: 320px;
  border: 3px solid gray;
  overflow: hidden;
  font-size: 0;
}

.button {
  position: absolute;
  bottom: 40px;
  display: inline-block;
  width: 52px;
  height: 52px;
  background-color: white;
  border: 3px solid gray;
  color: grey;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: gray;
    border: 3px solid gray;
    color: white;
    opacity: 0.75;
  }

  &.prev-button {
    left: -3px;
  }

  &.next-button {
    right: -3px;
  }
}

.bk-enter-active,
.bk-leave-active {
  transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
  transform: scale(1.2) translateZ(0);
  opacity: 0;
}
</style>
