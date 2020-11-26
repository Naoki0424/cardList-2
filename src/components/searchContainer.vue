<template>
  <div class="search-container-area"　:class="{'test': scrollY > 122}" >
    <div class="search-container">
      <div class="count">検索結果 {{searchCount}} <span class="smallFont">件</span>：{{this.scrollY}}</div>
      <template v-for="pack in displayPack" v-if="pack.checked">
        <div class="buttonPack" v-on:click.prevent="$emit('openSearchOverlay')">＋ {{pack.name}}</div>
      </template>
      <template v-for="type in displayType" v-if="type.checked">
        <div class="buttonType" v-on:click.prevent="$emit('openSearchOverlay')">＋ {{type.name}}</div>
      </template>
      <div class="buttonCriteria" v-on:click.prevent="$emit('openSearchOverlay')">＋ 条件</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-container',
  props: ['displayPack', 'displayType', 'searchCount'],
  data: function () {
    return {
      // 現在のスクロール位置
      scrollY: 0
    }
  },
  mounted: function() {
    console.log('mounted：開始')
    // スクロールイベントを追加
    document.onscroll = (e) => {
      this.scrollY = document.documentElement.scrollTop || document.body.scrollTop
    }
    console.log('mounted：終了')
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
  // width: 100%;
  margin: 5px 5px 10px 5px;
  padding: 5px 5px;
  background-color: #EEEEEE;
}

// .sticky {
//   position: sticky;
//   top: 0;
//   z-index: 1;
// }

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

.test {
  position: sticky;
  top: 0;
  z-index: 100;

  background-color: #EEEEEE;
  width: 100%;
  margin: 0 -500%;
  padding: 0 500%;
  height: 100%;
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
