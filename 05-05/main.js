var Sharable = {
  data: function(){
    return{
      _isProcessing: false
    }
  },
  methods:{
    share: function(){
      if(this._isProcessing){
        return
      }
      if(!window.confirm('シェアしますか?')){
        return
      }
      this._isProcessing = true
      // ここでSNSのSDKのAPIを呼び出す
      setTimeout(function(){
        window.alert('シェアしました')
        this._isProcessing = false;
      }, 300)
    }
  }
}

var IconShareButton = {
  mixins: [Sharable],
  template:`
    <button v-on:click="share"><i class="fas fa-share-square"></i></button>
  `,
}

var TextShareButton = {
  mixins: [Sharable],
  template: `
    <button v-on:click="share">{{ buttonLabel }}</button>
  `,
  data: function(){
    return{
      buttonLabel: 'シェアする',
    }
  }
}

var vm = new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
})
