<template>
  <div class="overlay" v-on:click.prevent="$emit('closePicture')" v-on:touchstart.prevent="$emit('closePicture')">
    <div class="overlay-picture" :style="getPicture()"></div>
  </div>
</template>

<script>
export default {
  name: 'overlay-picture',
  props: ['cardList', 'showImageNo'],
  methods: {
    getPicture: function () {
      console.log(this.cardList[this.showImageNo].url)
      return { 'background-image': 'url("' + this.cardList[this.showImageNo].url + '")' }
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
.overlay-picture{
  z-index:2;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  cursor: pointer;
  background-size: 100% 100%;
  animation: SlideIn 0.5s;
  opacity: 0;
  animation-fill-mode:forwards;
}

/* スマホ想定 */
@media only screen and (max-width: 599px) {
  .overlay-picture{
    width: 300px;
    height: 450px;
  }
}

@media only screen and (min-width: 600px) {
  .overlay-picture{
    width: 400px;
    height: 600px;
  }
}


@keyframes SlideIn {
  0% {
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
  }
}
</style>
