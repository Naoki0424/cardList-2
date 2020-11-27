<template>
  <div class="search-container-area"　:class="{'sticky': scrollY > this.point}" >
    <div class="search-container">
      <div class="count">検索結果 {{searchCount}} <span class="smallFont">件</span></div>
      <template v-for="pack in displayPack" v-if="pack.checked">
        <div class="buttonPack" v-on:click.prevent="$emit('openSearchOverlay')">＋ {{pack.name}}</div>
      </template>
      <template v-for="type in displayType" v-if="type.checked">
        <div class="buttonType" v-on:click.prevent="$emit('openSearchOverlay')">＋ {{type.name}}</div>
      </template>
      <div class="buttonCriteria" v-on:click.prevent="$emit('openSearchOverlay')">＋ 条件</div>
    </div>
    <template v-if="scrollY > this.point && !isTopBtnHidden">
      <div class="top" v-on:click.prevent="$emit('openSearchOverlay')">検索条件 </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'search-container',
  props: ['displayPack', 'displayType', 'searchCount', 'scrollY', 'isTopBtnHidden'],
  data: function () {
    return {
      // 検索ボタン表示位置
      point: 200
    }
  },
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


<style scoped lang="scss">
.search-container-area {
  margin: 5px 5px 10px 5px;
  padding: 5px 5px;
  background-color: #EEEEEE;
}

.count {
  font-size: 30px;
}
.smallFont {
  font-size: 15px;
}

.search-container {
  width: 100%;
  height: 100%;
}

.button {
  text-align:center;
  font-size: 15px;
  margin: 5px 5px;
  cursor: pointer;
  border-radius: 30px 30px 30px 30px;
  display: inline-block;
  padding: 0px 10px;
}

.buttonPack {
  @extend .button;
  color: #FFFFFF;
  background-color: #4689FF;
}

.buttonType {
  @extend .button;
  color: #FFFFFF;
  background-color: #32CD32;
}

.buttonCriteria {
  @extend .button;
  color: #4689FF;
  background-color: #FFFFFF;
}

/* スマホ想定 */
@media only screen and (max-width: 599px) {
  .top {
    width: 200px;
    height: 35px;
    position: fixed;
    // right: 0;
    bottom: 30px;
    left: 50%;
    color: #FFFFFF;
    background-color: #4689FF;
    opacity: 0.8;
    border-radius: 15px;
    text-align:center;
    font-size: 20px;
    margin: -100px 0px 0px -100px;
    z-index: 100;
    cursor: pointer;
  }
}

/* タブレット想定 */
@media only screen and (min-width: 600px) and (max-width: 1279px) {
  // .sticky {
  //   position: sticky;
  //   top: 0;
  //   z-index: 100;
  //
  //   background-color: #EEEEEE;
  //   height: 100%;
  //
  //   width: 100%;
  //   margin: 0 -500%;
  //   padding: 0 500%;
  // }

  .top {
    width: 200px;
    height: 35px;
    position: fixed;
    // right: 0;
    bottom: 30px;
    left: 50%;
    color: #FFFFFF;
    background-color: #4689FF;
    opacity: 0.8;
    border-radius: 15px;
    text-align:center;
    font-size: 20px;
    margin: -100px 0px 0px -100px;
    z-index: 100;
    cursor: pointer;
  }
}

/* PC想定 */
@media only screen and (min-width:1280px) {
  .button:hover {
    animation: flash 2s forwards;
  }

  @keyframes flash {
    0% { background: #20b2aa; }
    10% { background: #96e9e6; }
    100% { background: #20b2aa; }
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 100;

    background-color: #EEEEEE;
    height: 100%;

    width: 100%;
    margin: 0 -500%;
    padding: 0 500%;
  }

  .top {
    display: none;
  }
}
</style>
