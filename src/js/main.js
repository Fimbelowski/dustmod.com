window.onload = function() {
  var dl = new Vue({
    el: '#download',
    data: {
      dlButtonDisabled: false,
      OSChoicesAreHidden: true,
      OSChoicesAreCollapsed: true,
      focusedOS: '',
      windowsSubsectionIsHidden: true,
      windowsSubsectionIsCollapsed: true,
      macSubsectionIsHidden: true,
      macSubsectionIsCollapsed: true,
      linuxSubsectionIsHidden: true,
      linuxSubsectionIsCollapsed: true
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
      windowsSubsectionStyleObj: function() {
        return {
          'is-hidden': (this.windowsSubsectionIsHidden),
          'is-collapsed': (this.windowsSubsectionIsCollapsed)
        }
      },
      macStyleObj: function() {
        return {
          'is-focused': (this.focusedOS === 'mac'),
          'is-semi-transparent': (this.focusedOS && this.focusedOS !== 'mac')
        }
      },
      macSubsectionStyleObj: function() {
        return {
          'is-hidden': (this.macSubsectionIsHidden),
          'is-collapsed': (this.macSubsectionIsCollapsed)
        }
      },
      linuxStyleObj: function() {
        return {
          'is-focused': (this.focusedOS === 'linux'),
          'is-semi-transparent': (this.focusedOS && this.focusedOS !== 'linux')
        }
      },
      linuxSubsectionStyleObj: function() {
        return {
          'is-hidden': (this.linuxSubsectionIsHidden),
          'is-collapsed': (this.linuxSubsectionIsCollapsed)
        }
      }
    },
    methods: {
      showOSChoices: function() {
        window.requestAnimationFrame(function() {
          dl.OSChoicesAreHidden = false;
          dl.dlButtonDisabled = true;

          dl.expandOSChoices();
        });
      },
      expandOSChoices: function() {
        window.requestAnimationFrame(function() {
          dl.OSChoicesAreCollapsed = false;
        });
      },
      focusOSChoice: function(OSToFocus) {
        this.focusedOS = OSToFocus;

        // Use requestAnimationFrame to change styles on consecutive repaints for smooth transitions
        window.requestAnimationFrame(function() {
          dl.showDlSubsection();

          window.requestAnimationFrame(function() {
            dl.expandDlSubsection();
          });
        });
      },
      showDlSubsection: function() {
        this[this.focusedOS + 'SubsectionIsHidden'] = false;
      },
      expandDlSubsection: function() {
        // Collapse all subsections
        this.windowsSubsectionIsCollapsed = this.macSubsectionIsCollapsed = this.linuxSubsectionIsCollapsed = true;

        // Expand the appropriate subsection
        this[this.focusedOS + 'SubsectionIsCollapsed'] = false;
      }
    }
  });
}
