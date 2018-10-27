window.onload = function() {
  var downloadComponent = new Vue({
    el: '#l-download',
    data: {
      choicesAreHidden: true,
      windowsSubsectionsAreHidden: true,
      macSubsectionsAreHidden: true,
      linuxSubsectionsAreHidden: true
    },
    methods: {
      showChoices: function() {
        this.choicesAreHidden = false;
      }
    }
  });
}
