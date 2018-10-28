<template>
  <div>
    <h1>Snow</h1>
    <a href="https://qiita.com/Sr_Bangs/items/df4094e259d0c9c7ff82" target="_blank">
      <cite>https://qiita.com/Sr_Bangs/items/df4094e259d0c9c7ff82</cite>
    </a>
    <blockquote id="pixi" data-quantity="500" data-min-size="10" data-max-size="80" data-min-speed="200" data-max-speed="800"/>
  </div>
</template>

<script>
export default {
  mounted: function() {
    class SnowParticle {
      constructor($WRAPPER, IMAGES, QUANTITY, SIZE, SPEED) {
        const app = new PIXI.Application(800, 600, {
          backgroundColor: 0x1099bb
        })
        $WRAPPER.appendChild(app.view)

        // 画像をロード
        const loader = new PIXI.loaders.Loader()
        loader.add(IMAGES).load(() => {
          const PARTICLES = []

          // 表示する雪の数分ループ
          for (let index = 0; index < QUANTITY; index++) {
            // 使用する画像の設定
            const IMAGE_PATH = this.getImagePath(IMAGES)
            const PARTICLE = new PIXI.Sprite.fromImage(IMAGE_PATH)

            // 原点を中心に設定
            PARTICLE.anchor.set(0.5)

            // サイズをランダムに設定
            const PARTICLE_SIZE = this.getRandomInt(SIZE.min, SIZE.max)
            PARTICLE.width = PARTICLE_SIZE
            PARTICLE.height = PARTICLE_SIZE

            // 雪のX座標、Y座標をランダムに配置
            PARTICLE.x = Math.random() * app.screen.width
            PARTICLE.y = Math.random() * app.screen.height

            // 落ちていくスピードをランダムに設定
            const PARTICLE_SPEED = this.getRandomInt(SPEED.min, SPEED.max)
            PARTICLE.speed = (PARTICLE_SPEED + Math.random() * 0.5) * 0.5

            PARTICLES.push(PARTICLE)
            app.stage.addChild(PARTICLE)
          }

          app.ticker.add(() => {
            for (let index = 0; index < PARTICLES.length; index++) {
              // 配列からデータ取得
              const PARTICLE = PARTICLES[index]

              // 縦の位置を更新
              PARTICLE.y += (PARTICLE.height / 5000) * PARTICLE.speed

              // 雪を回転
              PARTICLE.rotation += 0.01

              // 画面の一番下に行った時縦の位置をリセット、横の位置をランダムに配置
              if (PARTICLE.y > app.screen.height + PARTICLE.height) {
                PARTICLE.y = -PARTICLE.height
                PARTICLE.x = Math.random() * app.screen.width
              }
            }
          })
        })
      }

      getImagePath(IMAGES) {
        const MAX = IMAGES.length
        const INDEX = Math.floor(Math.random() * MAX)
        return IMAGES[INDEX]
      }

      getRandomInt(MIN, MAX) {
        return Math.floor(Math.random() * (MAX + 1 - MIN)) + MIN
      }
    }

    class Snow {
      constructor() {
        const $WRAPPER = document.getElementById("pixi")

        // 雪の画像
        const IMAGES = [
          "/snow/snow-1.png",
          "/snow/snow-2.png",
          "/snow/snow-3.png"
        ]

        // 降らせる雪の数
        const QUANTITY = parseInt($WRAPPER.dataset.quantity, 10)

        // 雪のサイズ
        const SIZE = {
          min: parseInt($WRAPPER.dataset.minSize, 10),
          max: parseInt($WRAPPER.dataset.maxSize, 10)
        }

        // 雪が落ちる速度
        const SPEED = {
          min: parseInt($WRAPPER.dataset.minSpeed, 10),
          max: parseInt($WRAPPER.dataset.maxSpeed, 10)
        }

        new SnowParticle($WRAPPER, IMAGES, QUANTITY, SIZE, SPEED)
      }
    }

    new Snow()
  }
}
</script>

<style>
</style>
