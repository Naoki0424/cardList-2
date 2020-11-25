<template>
  <div class="main-content">
    <!-- 検索 -->
    <search-container v-bind:display-pack="displayPack" v-bind:display-type="displayType" v-bind:search-count="filteredCardList.length" v-on:openSearchOverlay="openSearchOverlay"></search-container>
    <!-- カードりすと -->
    <cardlist class="container-cardlist" v-bind:filtered-card-list="filteredCardList" v-on:openPicture="openPicture"></cardlist>
    <!-- 検索画面 -->
    <template v-if="isSearchScreen">
      <overlay-search v-bind:display-pack="displayPack" v-bind:display-type="displayType" v-on:closeSearchOverlay="closeSearchOverlay"></overlay-search>
    </template>
    <!-- 画像拡大 -->
    <template v-if="isShowImage">
      <overlay-picture v-bind:show-image-no="showImageNo" v-bind:card-list="cardList" v-on:closePicture="closePicture"></overlay-picture>
    </template>
  </div>
</template>

<script>
import cardlist from './cardlist.vue'
import overlayPicture from './overlay-picture.vue'
import searchContainer from './searchContainer.vue'
import overlaySearch from './overlay-search.vue'
// import axios from 'axios'
export default {
  name: 'container',
  components: {
    'cardlist': cardlist,
    'overlay-picture': overlayPicture,
    'search-container': searchContainer,
    'overlay-search': overlaySearch
  },
  data: function () {
    return {
      // 現在のスクロール１
      scrollY: 0,
      // 検索ボタンの表示有無
      isSerchBtnHidden: false,
      // 検索画面表示有無
      isSearchScreen: false,
      // 画像オーバーレイの表示有無
      isShowImage: false,
      // 画像オーバーレイに表示する画像番号
      showImageNo: 0,
      // カードりすと
      cardList: [],
      // 表示するパック
      displayPack: [
        {id: 'kp01', name: '超速のラッシュロード!!', checked: true},
        {id: 'kp02', name: '驚愕のライトニングアタック!!', checked: false},
        {id: 'cp01', name: 'キャラクターパック －ガクト・ロア・ロミン', checked: false},
        {id: 'kp03', name: '幻撃のミラージュインパクト!!', checked: false}
      ],
      // 表示する種別
      displayType: [
        {id: '00', name: '通常モンスター', checked: true},
        {id: '01', name: '効果モンスター', checked: true},
        {id: '02', name: '魔法', checked: true},
        {id: '03', name: '罠', checked: true}
      ],
      // スクロール１
      position: 0
    }
  },
  created: function () {
    console.log('created：開始')
    const axios = require('axios')
    console.log('URL：', process.env.VUE_APP_JSON_NM)
    axios.get(process.env.VUE_APP_JSON_NM).then(function (response) {
      console.log('JSON取得開始')
      this.cardList = response.data
      console.log(this.cardList)
      console.log('JSON取得終了')
    }.bind(this))
    console.log('created：終了')
  },
  methods: {
    openSearchOverlay: function () {
      this.isSerchBtnHidden = true
      this.isSearchScreen = true
      document.addEventListener('mousewheel', this.noScroll, { passive: false })
      console.log('イベントが実行されました（openSearchOverlay）')
    },
    closeSearchOverlay: function () {
      this.isSerchBtnHidden = false
      this.isSearchScreen = false
      document.removeEventListener('mousewheel', this.noScroll, { passive: false })
      console.log('イベントが実行されました（closeSearchOverlay）')
    },
    noScroll: function (event) {
      event.preventDefault()
      console.log('イベントが実行されました（noScroll）')
    },
    openPicture: function (no, flg) {
      console.log('イベントが開始しました（openPicture） => no：', no)
      if (!flg) {
        return
      }
      this.isSerchBtnHidden = true
      this.isShowImage = true
      this.showImageNo = no
      document.addEventListener('mousewheel', this.noScroll, { passive: false })
      console.log('イベントが終了しました（openPicture）')
    },
    closePicture: function () {
      console.log('イベントが開始しました（closePicture）')
      this.isSerchBtnHidden = false
      this.isShowImage = false
      document.removeEventListener('mousewheel', this.noScroll, { passive: false })
      console.log('イベントが終了しました（closePicture）')
    },
    getDisplayPackList: function () {
      var newList = []
      for (var i = 0; i < this.displayPack.length; i++) {
        if (this.displayPack[i].checked) {
          newList.push(this.displayPack[i].id)
        }
      }
      return newList
    },
    getDisplayTypeList: function () {
      var newList = []
      for (var i = 0; i < this.displayType.length; i++) {
        if (this.displayType[i].checked) {
          newList.push(this.displayType[i].id)
        }
      }
      return newList
    }
  },
  computed: {
    // 表示するリストを作成する
    filteredCardList: function () {
      console.log('computed：filteredCardList：開始')
      // 表示するカードを格納するリスト
      var newList = []
      // 表示するパックのリスト
      var displayPackList = this.getDisplayPackList()
      // 表示する種別のリスト
      var displayTypeList = this.getDisplayTypeList()

      console.log('computed：filteredCardList：', this.cardList)
      console.log(this.cardList.length)

      // 取得したリストをループする
      for (var i = 0; i < this.cardList.length; i++) {
        // パックの確認
        if (!displayPackList.includes(this.cardList[i].pack)) {
          continue
        }
        // 種別の確認
        if (!displayTypeList.includes(this.cardList[i].type)) {
          continue
        }
        newList.push(this.cardList[i])
      }
      console.log('computed：filteredCardList：結果')
      console.log(newList)
      console.log('computed：filteredCardList：終了')
      // 絞り込み後の商品リストを返す
      return newList
    }
  }
}
</script>

<style scoped>

.main-content {
  background-color: #EEEEEE;
  /* width: 100%; */
  /* width: 850px; */
  /* 中央よせ */
  margin-left: auto;
  margin-right: auto;
}

.main-content:before {
  content: "";
  display: block;
  padding-top: 1%;
}

/* スマホ想定 */
@media only screen and (max-width: 599px) {
  .main-content {
    width: 100%;
  }
}

/* タブレット想定 */
@media only screen and (min-width: 600px) and (max-width: 1279px) {
  .main-content {
    width: 690px;
  }
}

/* PC想定 */
@media only screen and (min-width:1280px) {
  .main-content {
    width: 850px;
  }
}
</style>
