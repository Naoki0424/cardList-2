<template>
  <div class="overlay">
    <div class="searchScreen">
      <h1 class="searchTitle">検索</h1>
      <div class="serchOptionContainer">
        <div class="catergoryPack">パック</div>
        <label v-for="pack in displayPack" :key="pack.id" v-bind:class="getSearchOptionPackClassNm(pack.id)">
          <input type="checkbox" v-model="pack.checked">{{pack.name}}
        </label>
        <div class="catergoryType">種類</div>
        <label v-for="type in displayType" :key="type.id" v-bind:class="getSearchOptionTypeClassNm(type.id)"><input type="checkbox" v-model="type.checked">{{type.name}}</label>
      </div>
      <div class="buttonContainer">
        <input type="button" class="buttonSearch" v-on:click.prevent="$emit('closeSearchOverlay')" v-on:touchend.prevent="$emit('closeSearchOverlay')" value="閉じる">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overlay-search',
  props: ['displayPack', 'displayType'],
  methods: {
    getSearchOptionPackClassNm: function (id) {
      return 'optionPack' + id
    },
    getSearchOptionTypeClassNm: function (id) {
      return 'optionType' + id
    }
  }
}
</script>

<style scoped>
.overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttonContainer {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.buttonSearch {
  width: 150px;
  margin: 0 auto;
}
input{ font-size:16px; }

/* スマホ想定 */
@media only screen and (max-width: 599px) {
  .searchScreen {
    width: 400px;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 10px;
    animation: SlideIn 0.5s;
  }
  .searchTitle {
    text-align: center;
    font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    border-bottom: solid 3px #C0C0C0;
  }
  .serchOptionContainer {
    display: grid;
    grid-template-areas:
    "a b"
    "a c"
    "a d"
    "a e"
    "f g"
    "f h"
    "f i"
    "f j";
    grid-template-columns: 20% 80%;
  }
  .catergoryPack{grid-area: a; background-color: #EEEEEE; border-bottom: 1px solid #CCCCCC; border-top: 1px solid #CCCCCC;}
  .optionPackkp01{grid-area: b; border-top: 1px solid #CCCCCC; height: 50px;}
  .optionPackkp02{grid-area: c; height: 50px;}
  .optionPackcp01{grid-area: d; height: 50px;}
  .optionPackkp03{grid-area: e; border-bottom: 1px solid #CCCCCC; height: 50px;}
  .catergoryType{grid-area: f; background-color: #EEEEEE; border-bottom: 1px solid #CCCCCC;}
  .optionType00{grid-area: g; height: 50px;}
  .optionType01{grid-area: h; height: 50px;}
  .optionType02{grid-area: i; height: 50px;}
  .optionType03{grid-area: j; border-bottom: 1px solid; border-color: #CCCCCC; height: 50px;}
}

/* スマホ以外想定 */
@media only screen and (min-width: 600px) {
  .searchScreen {
    width: 800px;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 10px;
    animation: SlideIn 0.5s;
  }
  .searchTitle {
    text-align: center;
    font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    border-bottom: solid 3px #C0C0C0;
  }
  .serchOptionContainer {
    display: grid;
    grid-template-areas:
    "a b c"
    "a d e"
    "f g h"
    "f i j";
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: 50px 50px 50px 50px;
  }
  .catergoryPack{grid-area: a; background-color: #EEEEEE; border-bottom: 1px solid; border-top: 1px solid; border-color: #CCCCCC;}
  .optionPackkp01{grid-area: b; border-top: 1px solid; border-color: #CCCCCC;}
  .optionPackkp02{grid-area: c; border-top: 1px solid; border-color: #CCCCCC;}
  .optionPackcp01{grid-area: d; border-bottom: 1px solid; border-color: #CCCCCC;}
  .optionPackkp03{grid-area: e; border-bottom: 1px solid; border-color: #CCCCCC;}
  .catergoryType{grid-area: f; background-color: #EEEEEE; border-bottom: 1px solid; border-color: #CCCCCC;}
  .optionType00{grid-area: g;}
  .optionType01{grid-area: h;}
  .optionType02{grid-area: i; border-bottom: 1px solid; border-color: #CCCCCC;}
  .optionType03{grid-area: j; border-bottom: 1px solid; border-color: #CCCCCC;}
}
</style>
