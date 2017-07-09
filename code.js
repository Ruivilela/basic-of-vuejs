const app = new Vue({
  el: '#app',
  data: {
    message: "hello world!"
  }
})

const app2 = new Vue({
  el: '#app2',
  data:{
    message: 'You loaded this page on ' + new Date()
  }
})

const app3 = new Vue({
  el: '#app3',
  data:{
    seen: true
  }
})

const app4 = new Vue({
  el: '#app4',
  data:{
    pirates: [
      {'name':'luffy','job':'captain'},
      {'name':'sanji', 'job': 'cook'},
      {'name':'Nami', 'job':'navigator'},
      {'name':'Chopper', 'job':'doctor'},
      {'name':'Zoro', 'job':'swordsman'}
    ]
  }
})

const app5 = new Vue({
  el: '#app5',
  data:{
    message: "RADAR oh wait that word is the same backwards So no one will see the effect, maybe if this text is to long people will start to realize that the text is backwards. I can't really emphasize this enough, so I will just keep writting to make a point!"
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

const app6 = new Vue({
  el: '#app6',
  data:{
    message:"hello mate!"
  }
})

Vue.component('todo-item',{
  template:'<li> this is a todo </li>'
})
