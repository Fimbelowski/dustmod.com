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
            btnState: '',
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
            btnState: '',
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
            btnState: '',
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
        onOSClicked: function(osID) {
            // When an os-clicked event is received, set the state of the os button that was clicked to 'is-focused'.
            // Set all other button states to 'is-semi-transparent'.
            for(var i = 0; i < this.osChoices.length; i++) {
                if(this.osChoices[i].id === osID) {
                    this.osChoices[i].btnState = 'is-focused';
                } else {
                    this.osChoices[i].btnState = 'is-semi-transparent';
                }
            }
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