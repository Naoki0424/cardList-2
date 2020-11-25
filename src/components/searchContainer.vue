<template>
  <div class="search-container-area">
    <div class="search-container">
      <div class="count">検索結果 {{searchCount}} <span class="smallFont">件</span></div>
      <template v-for="pack in displayPack" v-if="pack.checked">
        <div class="buttonPack" v-on:click.prevent="$emit('openSearchOverlay')">＋ {{pack.name}}</div>
      </template>
      <template v-for="type in displayType" v-if="type.checked">
        <div class="buttonType" v-on:click.prevent="$emit('openSearchOverlay')">＋ {{type.name}}</div>
      </template>
      <div class="buttonCriteria" v-on:click.prevent="$emit('openSearchOverlay')">＋ 条件</div>
      <div class="buttonCriteria">クリア</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-container',
  props: ['displayPack', 'displayType', 'searchCount'],
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
  /* background-color: #AAAAAA; */
  width: 100%;
  position: relative;
  margin: 5px 5px;
}

.count {
  font-size: 30px;
}
.smallFont {
  font-size: 15px;
}

.search-container {
  width: 95%;
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
  /* .search-container-area {
    width: 100%;
  } */
}

/* タブレット想定 */
@media only screen and (min-width: 600px) and (max-width: 1279px) {
  /* .search-container-area {
    width: 600px;
  } */
}

/* PC想定 */
@media only screen and (min-width:1280px) {
  /* .search-container-area {
    width: 750px;
  } */
  .button:hover {
    animation: flash 2s forwards;
  }

  @keyframes flash {
    0% { background: #20b2aa; }
    10% { background: #96e9e6; }
    100% { background: #20b2aa; }
  }
}
</style>
