<template>
  <div class="headder-area">
    <h1 class="title">カード一覧</h1>
    <!-- <div class="serchberTest"></div> -->
    <!-- <div v-bind:class="['searchBtn', {serchBtnHidden: isSerchBtnHidden}]" v-on:click.prevent="$emit('openSearchOverlay')" v-on:touchend.prevent="$emit('openSearchOverlay')"></div> -->
    <!-- <div v-bind:class="['searchBtn', {serchBtnHidden: isSerchBtnHidden}]" @click="clickHandler"></div> -->
  </div>
</template>

<script>
export default {
  name: 'headder',
  props: ['isSerchBtnHidden']
}
</script>

<style scoped>
.headder-area {
  width: 100%;
  padding: 5px 0px 5px 0px;
  margin-bottom: 10px;
  position: relative;
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

/* .searchBtn {
  position: fixed;
  top: 20px;
  right: 100px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  text-align: center;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);
  transition: .3s;
  overflow: hidden;
  background-image: url(../assets/search.jpg);
  background-size: cover;
  z-index: 1;
}

.searchBtn:hover {
  box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
  transform: translateY(-4px);
  cursor: pointer;
}

.serchBtnHidden {
  opacity: 0;
} */

.serchberTest {
  /* background-color: #AAAAAA; */
  width: 850px;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  border: solid 3px #AAAAAA;
}
</style>
