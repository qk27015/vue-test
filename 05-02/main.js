
var MyButton = {
  // slot : 要素が空なら置換を行う
  template: `
    <button>
      <slot>OK</slot>
    </button>
  `
}

var MyPage = {
  template: `
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    MyButton: MyButton,
    MyPage: MyPage
  }
})
