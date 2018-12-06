window.onload = function() {
  var vm = new Vue({
    el: '#root',
    data: {
      choicesAreShown: false,
      focusedOS: ''
    },
    methods: {
      focusOS: function(os) {
        this.focusedOS = os;
      }
    }
  });
}