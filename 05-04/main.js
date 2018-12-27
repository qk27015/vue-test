var MyButton = {
  props: ['href', 'tag'],
  render: function(createElement){
    var tag = this.tag || (this.href ? 'a' : 'button')

    return createElement(tag, {
      attrs: { href: this.href || '#'}
    }, this.$slots.default)
  },
  /*
  template:`
    <a v-if="(!tag && href) || tag === 'a'" v-bind:href="href || '#'">
      <slot></slot>
    </a>
    <span v-else-if="tag === 'span'">
      <slot></slot>
    </span>
    <button v-else>
      <slot></slot>
    </button>
  `*/
}

var vm = new Vue({
  el: '#app',
  components: {
    MyButton: MyButton
  }
})
