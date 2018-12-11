Vue.component('feature-grid', {
    data: function() {
        return {
            features: [
                {
                    caption: 'Online Multiplayer',
                    images: [
                        {
                            path: 'dist/images/feature-images/multiplayer-1.jpg',
                            subcaption: 'Four Player',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-2.jpg',
                            subcaption: 'Two Player',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-3.jpg',
                            subcaption: 'Three Player',
                            zIndex: 0
                        }
                    ]
                },
                {
                    caption: 'Quality of Life',
                    images: [
                        {
                            path: 'dist/images/feature-images/qol-1.jpg',
                            subcaption: 'Input Display',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/qol-2.jpg',
                            subcaption: 'Replay Ghosts',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/qol-3.jpg',
                            subcaption: 'In-Game Configuration',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/qol-4.jpg',
                            subcaption: 'Extended Virtual Tome',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/qol-5.jpg',
                            subcaption: 'Game Save Recovery/Reset',
                            zIndex: 0
                        }
                    ]
                },
                {
                    caption: 'Community Nexus',
                    images: [
                        {
                            path: 'dist/images/feature-images/community-nexus-1.jpg',
                            subcaption: 'Single Screen Map Pack',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-2.jpg',
                            subcaption: 'Dustforce Arcade',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-3.jpg',
                            subcaption: 'Entrance',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-4.jpg',
                            subcaption: 'Dark Forest Map Pack',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/community-nexus-5.jpg',
                            subcaption: 'CMR 54 Nexus',
                            zIndex: 0
                        }
                    ]
                },
                {
                    caption: 'Extended Leaderboards',
                    images: [
                        {
                            path: 'dist/images/feature-images/leaderboards-1.jpg',
                            subcaption: 'Lowjump Leaderboards',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/leaderboards-2.jpg',
                            subcaption: 'Character Filtering',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/leaderboards-3.jpg',
                            subcaption: 'TAS Leaderboards',
                            zIndex: 0
                        }
                    ]
                },
                {
                    caption: 'Custom Level Scripting',
                    images: [
                        {
                            path: 'dist/images/feature-images/scripting-1.jpg',
                            subcaption: 'Multiple Characters',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/scripting-2.jpg',
                            subcaption: 'Reactive Elements',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/scripting-3.jpg',
                            subcaption: 'Custom Visual Effects',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/scripting-4.jpg',
                            subcaption: 'Custom Characters/Movesets',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/scripting-5.jpg',
                            subcaption: 'Custom Visual Elements',
                            zIndex: 0
                        }
                    ]
                },
                {
                    caption: 'Daily Featured Custom Level',
                    images: [
                        {
                            path: 'dist/images/feature-images/daily-1.jpg',
                            subcaption: 'Leaderboard',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-2.jpg',
                            subcaption: 'History',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-3.jpg',
                            subcaption: 'Entrance',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-4.jpg',
                            subcaption: 'Featured Level on 12/06/2018',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/daily-5.jpg',
                            subcaption: 'Leaderboard Location',
                            zIndex: 0
                        }
                    ]
                },
                {
                    caption: 'TAS Tools',
                    images: [
                        {
                            path: 'dist/images/feature-images/tas-tools-1.jpg',
                            subcaption: 'Frame Advance in Use',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/tas-tools-2.jpg',
                            subcaption: 'Frame Advance Menu',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/tas-tools-3.jpg',
                            subcaption: 'Debug Data',
                            zIndex: 0
                        }
                    ]
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
                console.log('Sliding images right...');

                // Lock the overlay controls
                this.lockControls(index);

                // Set the z-index of the first element in the images array for a given feature to -1 to prevent transition overlaps.
                this.features[index].images[0].zIndex = -1;

                console.log('Set left-most image z-index to -1');

                // Remove the first element in the images array for a given feature and add it to the end of the array.
                this.features[index].images.push(this.features[index].images.shift());

                // Reset all image z-indexes after the transition is complete.
                setTimeout(function() {
                    this.resetAllZIndexes(index);
                    console.log('All z indices reset.');
                    this.unlockControls(index);
                }.bind(this), 400);
            }
        },
        resetAllZIndexes: function(index) {
            // Reset all z-indexes that were preventing transition overlap.
            for(var i = 0; i < this.features[index].images.length; i++) {
                this.features[index].images[i].zIndex = 0;
            }
        },
        addFeatureIndices: function() {
            // For each feature, add a property with the feature's index in the feature array
            for(var i = 0; i < this.features.length; i++) {
                this.features[i].index = i;
            }
        },
        addControlLockBool: function() {
            // For each feature, add a 'controlsAreLocked' property with an initial value of false
            for(var i = 0; i < this.features.length; i++) {
                this.features[i].controlsAreLocked = false;
            }
        },
        addImageZIndices: function() {
            // For each image in each feature, add a 'zIndex' property with an initial value of 0
            for(var i = 0; i < this.features.length; i++) {
                for(var j = 0; j < this.features[i].images.length; j++) {
                    this.features[i].images[j].zIndex = 0;
                }
            }
        },
        calcMedianImageIndices: function() {
            // For each image in each feature, checks to see if an image is at the median index and adds a boolean based on the check
            for(var i = 0; i < this.features.length; i++) {
                // Calculate the median index based on the length of the 'images' array
                var medianIndex = Math.floor(this.features[i].images.length / 2);

                // Set the value of isMedian in each image object
                for(var j = 0; j < this.features[i].images.length; j++) {
                    if(medianIndex === j) {
                        this.features[i].images[j].isMedian = true;
                    } else {
                        this.features[i].images[j].isMedian = false;
                    }
                }
            }
        },
        addImageLoadBool: function() {
            // For each image in each feature, add a 'canLoad' property with an initial value of false
            for(var i = 0; i < this.features.length; i++) {
                for(var j = 0; j < this.features[i].images.length; j++) {
                    this.features[i].images[j].canLoad = true;
                }
            }
        },
        loadAllImages: function() {
            // For each image in each feature, set the 'canLoad' property to true
            for(var i = 0; i < this.features.length; i++) {
                for(var j = 0; j < this.features[i].images.length; j++) {
                    this.features[i].images[j].canLoad = true;
                }
            }
        }
    },
    created: function() {
        this.addFeatureIndices();
        this.addControlLockBool();
        this.calcMedianImageIndices();
        this.addImageLoadBool();
    },
    mounted: function() {
        this.$nextTick(function() {
            this.loadAllImages();
        });
    },
    template: '<div class="feature-grid">\
                    <feature\
                    v-for="feature in features"\
                    :feature-info="feature"\
                    :key="feature.caption"\
                    @prev-clicked="slideImagesLeft"\
                    @next-clicked="slideImagesRight"></feature>\
                </div>'
});