Vue.component('feature-grid', {
    data: function() {
        return {
            features: [
                {
                    index: 0,
                    caption: 'Online Multiplayer',
                    images: [
                        {
                            path: 'dist/images/feature-images/multiplayer-1.jpg',
                            subcaption: 'Victory',
                            key: 'multiplayer-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-2.jpg',
                            subcaption: 'Containment',
                            key: 'multiplayer-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-3.jpg',
                            subcaption: 'Construction Site',
                            key: 'multiplayer-3',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 1,
                    caption: 'Quality of Life Changes',
                    images: [
                        {
                            path: 'dist/images/feature-images/quality-of-life-1.jpg',
                            subcaption: 'Input Display',
                            key: 'quality-of-life-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/quality-of-life-2.jpg',
                            subcaption: 'Replay Ghosts',
                            key: 'quality-of-life-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/quality-of-life-3.jpg',
                            subcaption: 'In-Game Configuration',
                            key: 'quality-of-life-3',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/quality-of-life-4.jpg',
                            subcaption: 'Extended Virtual Tome',
                            key: 'quality-of-life-4',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/quality-of-life-5.jpg',
                            subcaption: 'Game Save Recovery/Reset',
                            key: 'quality-of-life-5',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 2,
                    caption: 'Community Nexus',
                    images: [
                        {
                            path: 'dist/images/feature-images/community-nexus-1.jpg',
                            subcaption: 'Single Screen Map Pack',
                            key: 'community-nexus-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-2.jpg',
                            subcaption: 'Dustforce Arcade',
                            key: 'community-nexus-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-3.jpg',
                            subcaption: 'Entrance',
                            key: 'community-nexus-3',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-4.jpg',
                            subcaption: 'Dark Forest Map Pack',
                            key: 'community-nexus-4',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-5.jpg',
                            subcaption: 'CMR 54 Nexus',
                            key: 'community-nexus-5',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 3,
                    caption: 'Enhanced Custom Level Editor',
                    images: [
                        {
                            path: 'dist/images/feature-images/editor-1.jpg',
                            subcaption: 'Replace',
                            key: 'editor-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/editor-2.jpg',
                            subcaption: 'Replace',
                            key: 'editor-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/editor-3.jpg',
                            subcaption: 'Replace',
                            key: 'editor-3',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 4,
                    caption: 'Extended Leaderboards',
                    images: [
                        {
                            path: 'dist/images/feature-images/leaderboard-1.jpg',
                            subcaption: 'Lowjump Leaderboards',
                            key: 'leaderboard-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/leaderboard-2.jpg',
                            subcaption: 'Character Filtering',
                            key: 'leaderboard-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/leaderboard-3.jpg',
                            subcaption: 'TAS Leaderboards',
                            key: 'leaderboard-3',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 5,
                    caption: 'Custom Level Scripting',
                    images: [
                        {
                            path: 'dist/images/feature-images/scripting-1.jpg',
                            subcaption: 'Custom Visual Elements',
                            key: 'scripting-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/scripting-2.jpg',
                            subcaption: 'Multiple Characters',
                            key: 'scripting-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/scripting-3.jpg',
                            subcaption: 'Replace',
                            key: 'scripting-3',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 6,
                    caption: 'Daily Featured Custom Level',
                    images: [
                        {
                            path: 'dist/images/feature-images/daily-1.jpg',
                            subcaption: 'Leaderboard',
                            key: 'daily-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-2.jpg',
                            subcaption: 'History',
                            key: 'daily-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-3.jpg',
                            subcaption: 'Entrance',
                            key: 'daily-3',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-4.jpg',
                            subcaption: 'Featured Level on 12/06/2018',
                            key: 'daily-4',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-5.jpg',
                            subcaption: 'Leaderboard Location',
                            key: 'daily-5',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                {
                    index: 7,
                    caption: 'TAS Tools',
                    images: [
                        {
                            path: 'dist/images/feature-images/tas-tools-1.jpg',
                            subcaption: 'Frame Advance in Use',
                            key: 'tas-tools-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/tas-tools-2.jpg',
                            subcaption: 'Frame Advance Menu',
                            key: 'tas-tools-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/tas-tools-3.jpg',
                            subcaption: 'Debug Data',
                            key: 'tas-tools-3',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                }
            ]
        }
    },
    methods: {
        lockControls: function(index) {
            // Disables the controls of the feature overlay while transitions are occuring
            this.features[index].controlsAreLocked = true;
        },
        unlockControls: function(index) {
            // Enables the controls of the feature overlay after all transitions have finished
            this.features[index].controlsAreLocked = false;
        },
        slideImagesLeft: function(index) {
            // If the controls are unlocked, proceed normally
            if(this.features[index].controlsAreLocked === false) {
                // Lock the overlay controls
                this.lockControls(index);
                
                // Set the z-index of the last element in the images array for a given feature to -1 to prevent transition overlaps.
                this.features[index].images[this.features[index].images.length -1].zIndex = -1;

                // Remove the last element in the images array for a given feature and add that element to the beginning of the array.
                this.features[index].images.unshift(this.features[index].images.pop());

                // Reset all image z-indexes after the transition is complete.
                setTimeout(function() {
                    this.resetAllZIndexes(index);
                    this.unlockControls(index)
                }.bind(this), 400);
            } // Otherwise do nothing
        },
        slideImagesRight: function(index) {
            // If the controls are unlocked, proceed normally
            if(this.features[index].controlsAreLocked === false) {
                // Lock the overlay controls
                this.lockControls(index);

                // Set the z-index of the first element in the images array for a given feature to -1 to prevent transition overlaps.
                this.features[index].images[0].zIndex = -1;

                // Remove the first element in the images array for a given feature and add it to the end of the array.
                this.features[index].images.push(this.features[index].images.shift());

                // Reset all image z-indexes after the transition is complete.
                setTimeout(function() {
                    this.resetAllZIndexes(index);
                    this.unlockControls(index);
                }.bind(this), 400);
            }
        },
        resetAllZIndexes: function(index) {
            // Reset all z-indexes that were preventing transition overlap.
            for(var i = 0; i < this.features[index].images.length; i++) {
                this.features[index].images[i].zIndex = 0;
            }
        }
    },
    template: '<div class="feature-grid">\
                    <feature\
                    v-for="feature in features"\
                    :feature-info="feature"\
                    :key="feature.caption"\
                    @prev-clicked="slideImagesLeft"\
                    @next-clicked="slideImagesRight"\
                    @transition-end="resetAllZIndexes"></feature>\
                </div>'
});