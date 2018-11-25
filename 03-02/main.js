// グローバルコンポーネントを#fruits-listにマウント //
/*
// Vueの初期化前に登録する必要がある
Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>'
});

new Vue({
  el: '#fruits-list'
});
*/


// サブクラスのコンストラクタベース
/*
var FruitsListTitle = Vue.extend({
  template: '<h2>フルーツ一覧</h2>'
});
new FruitsListTitle().$mount('#fruits-list');

Vue.component('fruits-list-title', FruitsListTitle);
*/



// ローカルコンポーネント //
/*
new Vue({
  el: "#fruits-list",
  components: {
    'fruits-list-title': { // - を含むキーは文字列とする
      template: '<h1>フルーツ一覧</h1>'
    }
  }
});

// サブクラスのコンストラクタベース
var FruitsListTitle = Vue.extend({
  template: '<h2>フルーツ一覧</h2>'
});
new Vue({
  el: "#fruits-list",
  components: {
    'fruits-list-title': FruitsListTitle
  }
});
*/



// text/x-template
Vue.component('fruits-list-title', {
  template: '#fruits-list-title'
});
new Vue({
  el: '#fruits-list'
});

// 描画関数 renderオプション
Vue.component('input-date-with-today', {
  render: function(createElement){
    return createElement('input', {
      attrs: {type: 'date', value: new Date().toISOString().substring(0, 10)}
    });
  }
});
new Vue({
  el: '#app'
});
