Vue.component('download-grid', {
    props: ['styles'],
    data: function() {
        return {
        osChoices: [
            {
            os: 'Windows',
            iconPath: 'dist/images/windows-logo.png',
            btnState: '',
            subsections: [
                {
                    note: 'DirectX 12 (Best Performance (Requires Windows 10))',
                    links: [
                        {
                            text: 'Steam (32-Bit)',
                            href: 'https://dustkid.com/getdustmod/win32_dx12_steam'
                        },
                        {
                            text: 'Steam (64-Bit)',
                            href: 'https://dustkid.com/getdustmod/win64_dx12_steam'
                        },
                        {
                            text: 'DRM-Free (32-Bit)',
                            href: 'https://dustkid.com/getdustmod/win32_dx12_drmfree'
                        },
                        {
                            text: 'DRM-Free (64-Bit)',
                            href: 'https://dustkid.com/getdustmod/win64_dx12_drmfree'
                        }
                    ]
                },
                {
                    note: 'DirectX 9 (The same as vanilla Dustforce)',
                    links: [
                        {
                            text: 'Steam (32-Bit)',
                            href: 'https://dustkid.com/getdustmod/win32_steam'
                        },
                        {
                            text: 'Steam (64-Bit)',
                            href: 'https://dustkid.com/getdustmod/win64_steam'
                        },
                        {
                            text: 'DRM-Free (32-Bit)',
                            href: 'https://dustkid.com/getdustmod/win32_drmfree'
                        },
                        {
                            text: 'DRM-Free (64-Bit)',
                            href: 'https://dustkid.com/getdustmod/win64_drmfree'
                        }
                    ]
                },
                {
                    note: 'SDL2 (OpenGL Based)',
                    links: [
                        {
                            text: 'Steam (32-Bit)',
                            href: 'https://dustkid.com/getdustmod/win32_sdl2_steam'
                        },
                        {
                            text: 'Steam (64-Bit)',
                            href: 'https://dustkid.com/getdustmod/win64_sdl2_steam'
                        },
                        {
                            text: 'DRM-Free (32-Bit)',
                            href: 'https://dustkid.com/getdustmod/win32_sdl2_drmfree'
                        },
                        {
                            text: 'DRM-Free (64-Bit)',
                            href: 'https://dustkid.com/getdustmod/win64_sdl2_drmfree'
                        }
                    ]
                }
            ],
            subsectionStyles: [
                'is-hidden',
                'is-collapsed'
            ]
            },
            {
            os: 'Mac OS X',
            iconPath: 'dist/images/apple-logo.png',
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
                ]
                }
            ],
            subsectionStyles: [
                'is-hidden',
                'is-collapsed'
            ]
            },
            {
            os: 'Linux',
            iconPath: 'dist/images/linux-logo.png',
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
                ]
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
        addOSIDProperty: function() {
            // For each OS option, add an id property which is the OS name in all lowercase
            for(var i = 0; i < this.osChoices.length; i++) {
                this.osChoices[i].id = this.osChoices[i].os.replace(/\s+/g, '-').toLowerCase();
            }
        },
        addOSImgAltProperty: function() {
            // For each OS option, add an imgAlt property that is the OS name + ' Logo'
            for(var i = 0; i < this.osChoices.length; i++) {
                this.osChoices[i].imgAlt = this.osChoices[i].os + ' Logo';
            }
        },
        addOSSubsectionKeyProperty: function() {
            // For each subsection in each OS option, add a key property that is the OS ID and the number of the subsection
            for(var i = 0; i < this.osChoices.length; i++) {
                for(var j = 0; j < this.osChoices[i].subsections.length; j++) {
                    this.osChoices[i].subsections[j].key = this.osChoices[i].id + (j + 1);
                }
            }
        },
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
    created: function() {
        this.addOSIDProperty();
        this.addOSImgAltProperty();
        this.addOSSubsectionKeyProperty();
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