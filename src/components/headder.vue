<template>
  <div class="headder-area">
    <h1 class="title">カード一覧</h1>
  </div>
</template>

<script>
export default {
  name: 'headder',
  data: function () {
    return {
      testW: 0,
      testH: 0
    }
  },
  created: function () {
    this.testH = window.innerHeight
    this.testW = window.innerzWidth
  // ]    this.testH = window.outerHeight
  //     this.testW = window.outerWidth
  }
}
</script>

<style scoped>
.headder-area {
  width: 100%;
  padding: 5px 0px 0px 0px;
  margin-bottom: 10px;
}

.title {
  /* width: 850px; */
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom: solid 3px #C0C0C0;
  font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.serchberTest {
  /* background-color: #AAAAAA; */
  width: 850px;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  border: solid 3px #AAAAAA;
}
</style>
