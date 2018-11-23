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
     items: items, // vm直下に配置される
  },
  filters: {
    numberWithDelimiter: function(value){
      if(!value) return '0';
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  },
  methods: {
    doBuy: function(){
      alert(this.totalPriceWithTax + '円のお買い上げ！');
      this.items.forEach(function(item){item.quantity = 0;});
    }
  },
  computed: {
    totalPrice: function(){
      return this.items.reduce(function(sum, item){ // このthisはVueインスタンスを指す
        return sum + item.price * item.quantity;
      }, 0);
    },
    totalPriceWithTax: function(){
      return Math.floor(this.totalPrice * 1.08);
    },
    canBuy: function(){
      return this.totalPrice >= 1000;
    },
    errorMessageClass: function(){
      return {error: !this.canBuy};
    },
    errorMessageStyle: function () {
      // canBuyが偽の時に赤く表示する
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red'
      }
    },
  }

});

console.log(vm);
console.log(vm.items);

vm.$watch(function(){
  return this.items[0].quantity; // 監視対象？
},function(quantity){
  console.log(quantity);
})
