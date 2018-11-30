Vue.component('download-grid', {
    data: function() {
        return {
            osChoices: [
              {
                os: 'Windows',
                id: 'windows'
              },
              {
                os: 'Mac OS X',
                id: 'mac'
              },
              {
                os: 'Linux',
                id: 'linux'
              }
            ],
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
        }
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
    },
    template: "<div class='os-choice-grid'>\
              <download-choice\
              v-for='os in osChoices'\
              :key='os.id'\
              :id='os.id'\
              :os-info='os'>\
              </download-choice>\
              </div>"
});

Vue.component('download-choice', {
  props: ['os-info'],
  data: function() {
    return {

    }
  },
  template: "<div class='os-choice-option'>\
            <a :href='\"#\" + osInfo.id' class='scroll-link no-decoration'>\
            <button type='button' class='os-btn'></button>\
            </a>\
            </div>"
});

window.onload = function() {
    var downloadVM = new Vue({
        el: '#download'
    });
}