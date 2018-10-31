window.onload = function() {
  var downloadComponent = new Vue({
    el: '#download',
    data: {
      dlButtonDisabled: false,
      OSChoicesAreHidden: true,
      OSChoicesAreCollapsed: true,
      focusedOS: ''
    },
    computed: {
      OSChoiceGridStyleObj: function() {
        return {
          'is-hidden': (this.OSChoicesAreHidden),
          'is-collapsed': (this.OSChoicesAreCollapsed)
        }
      },
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
        window.requestAnimationFrame(function() {
          downloadComponent.OSChoicesAreHidden = false;
          downloadComponent.dlButtonDisabled = true;

          downloadComponent.expandOSChoices();
        });
      },
      expandOSChoices: function() {
        window.requestAnimationFrame(function() {
          downloadComponent.OSChoicesAreCollapsed = false;
        });
      },
      focusOSChoice: function(OSToFocus) {
        this.focusedOS = OSToFocus;
      }
    }
  });
}
