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
    // レンダラーの生成
    const app = PIXI.autoDetectRenderer(800, 600, {
      backgroundColor: 0x1099bb
    })

    // DOMにレンダラーのViewを追加
    this.$refs.pixi.appendChild(app.view)

    // ステージを生成
    const stage = new PIXI.Container()

    // テキストスタイル
    var style = new PIXI.TextStyle({
      fontSize: "160px",
      fontWeight: "bold",
      fill: 0xffffff,
      fontFamily: "hm_tb"
    })

    // 画像からスプライトを生成
    var imgSprite = new PIXI.Sprite.from(`/snow/snow-1.png`)
    imgSprite.x = 8
    imgSprite.y = 8
    imgSprite.width = 350
    imgSprite.height = 350
    stage.addChild(imgSprite) // スプライトをステージに追加

    // テキストからスプライトを生成
    var textSprite = new PIXI.Text("Winter.", style)
    textSprite.anchor.set(0.5, 0.5) // 基準点をスプライトの中心にセットする
    textSprite.x = app.screen.width / 2 // スプライトの座標をステージの中心にする
    textSprite.y = app.screen.height / 2
    textSprite.alpha = 0.75
    stage.addChild(textSprite)

    // レンダラーにステージを描画させる
    app.render(stage)
  }
}
</script>

<style>
</style>
