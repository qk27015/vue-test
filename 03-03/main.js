// 子
Vue.component('item-desc', {
  props: {
    // 親から受け取る属性名をpropsに記述
    // キャメルケースで記述
    itemTest: {type: String}
  },
  // 受け取った属性をtemplateで使用可能
  template: '<p>{{itemTest}}は便利です。</p>'
});
new Vue({
  el: '#app',
  data: {myItem: 'pen'}
});



Vue.component('fruits-item-name', {
  props: {
    fruitsItem: {
      type: Object,
      required: true
    }
  },
  template: '<li>{{fruitsItem.name}}</li>'
});
new Vue({
    el: '#fruits-component',
    data: {
      fruitsItems: [
        {name: '梨'},
        {name: 'イチゴ'}
      ]
    }
});



// 子→親
var counterButton = Vue.extend({
  template: '<span>{{counter}}個<button v-on:click="addToCart">追加</button></span>',
  data : function(){ return {counter: 0};},
  methods: {addToCart: function(){
    this.counter += 1;
    this.$emit('increment'); // カスタムイベントの発火
  }}
});
new Vue({
  el: '#fruits-counter',
  components: {'counter-button': counterButton},
  data: {
    total: 0,
    fruits: [
      {name: '梨'},
      {name: 'イチゴ'}
    ]
  },
  methods: {
    incrementCartStatus: function(){this.total += 1;}
  }
});
