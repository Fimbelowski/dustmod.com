window.onload = function() {
  var downloadComponent = new Vue({
    el: '#l-download',
    data: {
      dlButtonDisabled: false,
      choicesAreHidden: true,
      focusedOS: ''
    },
    computed: {
      windowsStyleObj: function() {
        return {
          'is-focused': (this.focusedOS === 'windows'),
          'is-semi-transparent': (this.focusedOS && this.focusedOS !== 'windows')
        };
      },
      macStyleObj: function() {
        return {
          'is-focused': (this.focusedOS === 'mac'),
          'is-semi-transparent': (this.focusedOS && this.focusedOS !== 'mac')
        }
      },
      linuxStyleObj: function() {
        return {
          'is-focused': (this.focusedOS === 'linux'),
          'is-semi-transparent': (this.focusedOS && this.focusedOS !== 'linux')
        }
      }
    },
    methods: {
      showOSChoices: function() {
        this.choicesAreHidden = false;
        this.dlButtonDisabled = true;
      },
      focusOSChoice: function(OSToFocus) {
        this.focusedOS = OSToFocus;
      }
    }
  });
}
