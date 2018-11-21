console.assert(typeof Vue !== 'undefined');

var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
];

var vm = new Vue({
  el: '#app', // el : マウント対象のDOM要素
  data: { 
     items: items
  },
  filters: {
    numberWithDelimiter: function(value){
      if(!value) return '0';
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  }
});

new Vue({
  el: '#b-button',
  data: {
    loggedInButton: 'ログイン済みのため購入できます'
  }
})

console.log(vm);
console.log(vm.items);

vm.$watch(function(){
  return this.items[0].quantity; // 監視対象？
},function(quantity){
  console.log(quantity);
})
