<template>
  <div class="search-screen-area">
    <div class="headder-area"></div>
    <div class="option-content">
      <!-- <label v-for="item in displayList" :key="item.id" class="row"><input type="checkbox" v-model="item.checked">{{item.name}}</label> -->
      <div v-for="item in displayList" :key="item.id" class="row-area"><div class="row">{{item.name}}</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overlay-search',
  props: ['displayList'],
  created: function () {
    console.log(this.displayList)
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

<style scoped>
.search-screen-area {
  width: 100%;
  height: 100%;
  background-color: #EEEEEE;
  z-index: 100;
  position:fixed;
  top:0;
  left:0;
  animation: SlideIn 0.5s;
}

/* CSSアニメーションの設定 */
@keyframes SlideIn {
  0% {
    opacity: 0;
    transform: translateX(500px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.headder-area {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  /* 黄色 */
  background-color: #FFFFDD;
}

/* .option-area {
  width: 100%;
  height: auto;
} */

.option-content {
  width: 80%;
  /* 中央よせ */
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);

}

.row-area {
  background-color: #FFFFFF;
  border-bottom: solid 2px #EEEEEE;
  height: 50px;
}

.row {

}

</style>
