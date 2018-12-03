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
            btnStyle: '',
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
            ],
            subsectionStyles: [
                'is-hidden',
                'is-collapsed'
            ]
            },
            {
            os: 'Mac OS X',
            id: 'mac',
            iconPath: 'dist/images/apple-logo.png',
            imgAlt: 'Apple logo',
            btnStyle: '',
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
            ],
            subsectionStyles: [
                'is-hidden',
                'is-collapsed'
            ]
            },
            {
            os: 'Linux',
            id: 'linux',
            iconPath: 'dist/images/linux-logo.png',
            imgAlt: 'Linux logo',
            btnStyle: '',
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
            ],
            subsectionStyles: [
                'is-hidden',
                'is-collapsed'
            ]
            }
        ]
        }
    },
    methods: {
        onOSClicked: function(os) {
        for(var i = 0; i < this.osChoices.length; i++) {
            if(this.osChoices[i].id === os) {
            this.osChoices[i].btnStyle = 'is-focused'
            this.expandOSSubsections(i);
            } else {
            this.osChoices[i].btnStyle = 'is-semi-transparent'
            }
        }
        },
        expandOSSubsections: function(index) {
        /*
            This method uses window.requestAnimationFrame to modify styles on consecutive repaints so that a smooth expanding
            transition is achieved.
        */
        
        },
        collapseOSSubsections: function(index) {

        }
    },
    template: "<div class='os-choice-grid' :class='styles'>\
                <download-choice\
                v-for='os in osChoices'\
                :key='os.id'\
                :id='os.id'\
                :os-info='os'\
                @os-clicked='onOSClicked'>\
                </download-choice>\
                </div>"
});