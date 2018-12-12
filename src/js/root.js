window.onload = function() {
  var vm = new Vue({
    el: '#root',
    data: {
      choicesAreShown: false,
      focusedOS: '',
      version: ''
    },
    methods: {
      focusOS: function(os) {
        this.focusedOS = os;
      },
      getVersion: function() {
        // Query dustkid.com to retrieve Dustmod's current version number
        var req = new XMLHttpRequest();

        req.open('GET', 'http://dustkid.com/backend8/dustmod_version.php', true);

        req.onload = function() {
          console.log(this.responseText);
        }

        req.send();
      }
    },
    created: function() {
      this.getVersion();
    }
  });
}