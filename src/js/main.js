Vue.component('download-grid', {
  props: ['styles'],
  data: function() {
    return {
      osChoices: [
        {
          os: 'Windows',
          id: 'windows',
          iconPath: 'dist/images/windows-logo.png',
          imgAlt: 'Windows logo',
          subsections: [
            {
              note: 'Requires Win10 (Best Performance)',
              links: [
                {
                  text: 'DirectX 12 (Steam)',
                  href: 'https://dustkid.com/getdustmod/win32_dx12_steam'
                },
                {
                  text: 'DirectX 12 (DRM-Free)',
                  href: 'https://dustkid.com/getdustmod/win32_dx12_drmfree'
                }
              ],
              key: 'winSub0'
            },
            {
              note: 'The same as vanilla Dustforce',
              links: [
                {
                  text: 'DirectX 9 (Steam)',
                  href: 'https://dustkid.com/getdustmod/win32_steam'
                },
                {
                  text: 'DirectX 9 (DRM-Free)',
                  href: 'https://dustkid.com/getdustmod/win32_drmfree'
                }
              ],
              key: 'winSub1'
            },
            {
              note: 'OpenGL Based',
              links: [
                {
                  text: 'SDL2 (Steam)',
                  href: 'https://dustkid.com/getdustmod/win32_sdl2_steam'
                },
                {
                  text: 'SDL2 (DRM-Free)',
                  href: 'https://dustkid.com/getdustmod/win32_sdl2_drmfree'
                }
              ],
              key: 'winSub2'
            }
          ]
        },
        {
          os: 'Mac OS X',
          id: 'mac',
          iconPath: 'dist/images/apple-logo.png',
          imgAlt: 'Apple logo',
          subsections: [
            {
              note: '',
              links: [
                {
                  text: '64-Bit (Steam)',
                  href: 'https://dustkid.com/getdustmod/osx64_steam'
                },
                {
                  text: '64-Bit (DRM-Free)',
                  href: 'https://dustkid.com/getdustmod/osx64_drmfree'
                }
              ],
              key: 'macSub0'
            }
          ]
        },
        {
          os: 'Linux',
          id: 'linux',
          iconPath: 'dist/images/linux-logo.png',
          imgAlt: 'Linux logo',
          subsections: [
            {
              note: '',
              links: [
                {
                  text: '64-Bit (Steam)',
                  href: 'https://dustkid.com/getdustmod/linux64_steam'
                },
                {
                  text: '64-Bit (DRM-Free)',
                  href: 'https://dustkid.com/getdustmod/linux64_drmfree'
                }
              ],
              key: 'linuxSub0'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onOSClicked: function() {
      console.log('test');
    }
  },
  template: "<div class='os-choice-grid' :class='styles'>\
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
      subsectionStyles: [
        'is-hidden',
        'is-collapsed'
      ]
    }
  },
  methods: {
    osClicked: function() {
      this.$parent.$emit('os-clicked');
    }
  },
  template: "<div class='os-choice-option'>\
              <a :href='\"#\" + osInfo.id' class='scroll-link no-decoration'>\
                <button type='button' class='os-btn' :class='osInfo.id + \"-btn\"' @click='osClicked'>\
                  <h3 :class='osInfo.id + \"-text\"'>{{ osInfo.os }}</h3>\
                  <img :src='osInfo.iconPath' class='os-choice-img' :alt='osInfo.imgAlt'>\
                </button>\
              </a>\
              <download-subsection\
              v-for='subsection in osInfo.subsections'\
              :key='subsection.key'\
              :os='osInfo.id'\
              :subsectionInfo='subsection'>\
              </download-subsection>\
            </div>"
});

Vue.component('download-subsection', {
  props: ['os', 'subsection-info'],
  data: function() {
    return {
      styles: [
        'is-hidden',
        'is-collapsed'
      ]
    }
  },
  template: "<div class='dl-subsection' :class='[os + \"-subsection\", styles]'>\
              <p v-for='link in subsectionInfo.links'>\
                <a :href='link.href'>{{ link.text }}</a>\
              </p>\
            </div>"
});

window.onload = function() {
  var downloadVM = new Vue({
      el: '#download',
      data: {
        osChoiceGridStyles: [
          'is-hidden',
          'is-collapsed'
        ],
        focusedOS: ''
      },
      methods: {
        expandOSChoiceGrid: function() {
          /*
            This function will expand the OS Choice Grid with a smooth scroll-down effect. To do this, we need to first need
            to remove the 'is-hidden' class to show the content (with a max-height of 0). Then, we need to remove the 'is-collapsed'
            class to make the transition smooth.

            To do this we will use window.requestAnimationFrame to make sure that the class removals will happen on consecutive,
            repaints and avoid the transition being choppy.
          */
          window.requestAnimationFrame(function() {
            downloadVM.osChoiceGridStyles.splice(0, 1);

            window.requestAnimationFrame(function() {
              downloadVM.osChoiceGridStyles.splice(0, 1);
            });
          });
        },
        focusOS: function() {
          console.log('test');
        }
      }
  });
}