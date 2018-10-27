window.onload = function() {
  var downloadComponent = new Vue({
    el: '#l-download',
    data: {
      choicesAreHidden: true
    },
    methods: {
      showChoices: function() {
        this.choicesAreHidden = false;
      }
    }
  });
}
