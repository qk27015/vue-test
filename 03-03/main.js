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
      ],
      f: 'test'
    }
});
