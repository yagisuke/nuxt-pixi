<template>
  <div>
    <h1>Text</h1>
    Reference:
    <a href="https://qiita.com/hasemonmon/items/eff434dffdc46d50e54f" target="_blank">
      <cite>https://qiita.com/hasemonmon/items/eff434dffdc46d50e54f</cite>
    </a>
    <blockquote ref="pixi"/>
  </div>
</template>

<script>
export default {
  mounted: function() {
    const BASE_URL = this.$router.options.base

    // レンダラーの生成
    const app = new PIXI.Application(800, 600, {
      backgroundColor: 0x1099bb
    })

    // DOMにレンダラーのViewを追加
    this.$refs.pixi.appendChild(app.view)

    // 画像からスプライトを生成
    const imgSprite = new PIXI.Sprite.from(`${BASE_URL}text/snow-1.png`)
    imgSprite.anchor.set(0)
    imgSprite.x = 8
    imgSprite.y = 8
    imgSprite.width = 300
    imgSprite.height = 300

    // Canvasに反映
    app.stage.addChild(imgSprite)

    // テキストスタイル
    const smallTextStyle = new PIXI.TextStyle({
      fontSize: "100px",
      fontWeight: "normal",
      fill: 0xffffff
    })

    const bigTextStyle = new PIXI.TextStyle({
      fontSize: "250px",
      fontWeight: "normal",
      fill: 0xffffff
    })

    // テキストからスプライトを生成
    const smallTextSprite = new PIXI.Text("winter", smallTextStyle)
    smallTextSprite.anchor.set(0.5) // 基準点をスプライトの中心にセットする
    smallTextSprite.x = app.screen.width / 2 // スプライトの座標をステージの中心にする
    smallTextSprite.y = app.screen.height / 2
    smallTextSprite.alpha = 0.25

    const bigTextSprite = new PIXI.Text("SNOW", bigTextStyle)
    bigTextSprite.anchor.set(0.5)
    bigTextSprite.x = app.screen.width / 2
    bigTextSprite.y = app.screen.height / 2 + 150
    bigTextSprite.alpha = 0.5

    // Canvasに反映
    app.stage.addChild(smallTextSprite)
    app.stage.addChild(bigTextSprite)
  }
}
</script>

<style>
</style>
