<template>
  <div class="cardlist-area">
    <div class="cardlist" draggable="true" v-for="card in filteredCardList" :key="card.id" :style="getUrl(card.url)" v-on:click.prevent="$emit('openPicture', card.no, true)" v-on:touchstart="touchStart" v-on:touchmove="touchMove" v-on:touchend="$emit('openPicture', card.no, isTouch)"></div>
  </div>
</template>

<script lang="ts">
import longpress from 'vue-longpress';

export default {
  name: 'cardlist',
  components: {'longpress': longpress},
  props: ['filteredCardList'],
  data: function () {
    return {
      isTouch: false
    }
  },
  methods: {
    getUrl: function (url) {
      return { 'background-image': 'url("' + url + '")' }
    },
    touchStart: function () {
      this.isTouch = true
    },
    touchMove: function () {
      this.isTouch = false
    }
  }
}
</script>

<style scoped>
.cardlist-area {
  justify-content: center;
  display: grid;
}
.cardlist {
  border-radius: 10px;
  margin: 5px 5px;
  text-align: center;
  cursor: pointer;
  background-size: 100% 100%;
  box-shadow: 10px 10px 15px -10px;
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* スマホ想定 */
@media only screen and (max-width: 599px) {
  .cardlist-area {
    grid-template-columns: repeat(auto-fill, 50%);
  }
  .cardlist {
    height: 250px;
  }
}

/* タブレット想定 */
@media only screen and (min-width: 600px) and (max-width: 1279px) {
  .cardlist-area {
    grid-template-columns: repeat(4, 160px);
  }
  .cardlist {
    height: 200px;
  }
}

/* PC想定 */
@media only screen and (min-width:1280px) {
  .cardlist-area {
    grid-template-columns: repeat(5, 160px);
  }
  .cardlist {
    height: 200px;
  }
  .cardlist:hover {
    animation-name: cardHoberAnimation;
    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-fill-mode:forwards;
    z-index: 1;
  }
  @keyframes cardHoberAnimation {
    0% { transform: scale(1.0) ; }
    20% { transform: scale(1.2) rotateX(-10deg) rotateY(5deg) rotateZ(0deg); }
    80% { transform: scale(1.8) rotateX(15deg) rotateY(-10deg) rotateZ(5deg); }
    100% {
      transform: scale(2.0) ;
      box-shadow: 20px 20px 15px -10px;
    }
  }
}


</style>
