Vue.component('feature-grid', {
    data: function() {
        return {
            features: [
                {
                    caption: 'Online Multiplayer',
                    images: [
                        {
                            path: 'https://i.imgur.com/LPYEarp.jpg',
                            subcaption: 'Four Player'
                        },
                        {
                            path: 'https://i.imgur.com/xUWfM1d.jpg',
                            subcaption: 'Two Player'
                        },
                        {
                            path: 'https://i.imgur.com/hvHh43e.jpg',
                            subcaption: 'Three Player'
                        }
                    ]
                },
                {
                    caption: 'Quality of Life',
                    images: [
                        {
                            path: 'https://i.imgur.com/XU9k2qR.jpg',
                            subcaption: 'Input Display'
                        },
                        {
                            path: 'https://i.imgur.com/EU71x3f.jpg',
                            subcaption: 'Replay Ghosts'
                        },
                        {
                            path: 'https://i.imgur.com/w8DrmnM.jpg',
                            subcaption: 'In-Game Configuration'
                        },
                        {
                            path: 'https://i.imgur.com/HOFV6Z3.jpg',
                            subcaption: 'Extended Virtual Tome'
                        },
                        {
                            path: 'https://i.imgur.com/liKAR9z.jpg',
                            subcaption: 'Game Save Recovery/Reset'
                        }
                    ]
                },
                {
                    caption: 'Community Nexus',
                    images: [
                        {
                            path: 'https://i.imgur.com/gZILxzD.jpg',
                            subcaption: 'Single Screen Map Pack'
                        },
                        {
                            path: 'https://i.imgur.com/oFrc4K4.jpg',
                            subcaption: 'Dustforce Arcade'
                        },
                        {
                            path: 'https://i.imgur.com/mqMOfi8.jpg',
                            subcaption: 'Entrance'
                        },
                        {
                            path: 'https://i.imgur.com/vhJ2r6y.jpg',
                            subcaption: 'Dark Forest Map Pack'
                        },
                        {
                            path: 'https://i.imgur.com/YwmI08Z.jpg',
                            subcaption: 'CMR 54 Nexus'
                        }
                    ]
                },
                {
                    caption: 'Extended Leaderboards',
                    images: [
                        {
                            path: 'https://i.imgur.com/GJPwHiZ.jpg',
                            subcaption: 'Lowjump Leaderboards'
                        },
                        {
                            path: 'https://i.imgur.com/C5EdbzE.jpg',
                            subcaption: 'Character Filtering'
                        },
                        {
                            path: 'https://i.imgur.com/R0ZzkD0.jpg',
                            subcaption: 'TAS Leaderboards'
                        }
                    ]
                },
                {
                    caption: 'Custom Level Scripting',
                    images: [
                        {
                            path: 'https://i.imgur.com/Fx7NZhw.jpg',
                            subcaption: 'Multiple Characters'
                        },
                        {
                            path: 'https://i.imgur.com/ZShcg93.jpg',
                            subcaption: 'Reactive Elements'
                        },
                        {
                            path: 'https://i.imgur.com/530yqh9.jpg',
                            subcaption: 'Custom Visual Effects'
                        },
                        {
                            path: 'https://i.imgur.com/30zU2du.jpg',
                            subcaption: 'Custom Characters/Movesets'
                        },
                        {
                            path: 'https://i.imgur.com/KYkeUq5.jpg',
                            subcaption: 'Custom Visual Elements'
                        }
                    ]
                },
                {
                    caption: 'Daily Featured Custom Level',
                    images: [
                        {
                            path: 'https://i.imgur.com/YJvQjoc.jpg',
                            subcaption: 'Leaderboard'
                        },
                        {
                            path: 'https://i.imgur.com/xIqxDS7.jpg',
                            subcaption: 'History'
                        },
                        {
                            path: 'https://i.imgur.com/iM57jo6.jpg',
                            subcaption: 'Entrance'
                        },
                        {
                            path: 'https://i.imgur.com/FYWqhho.jpg',
                            subcaption: 'Featured Level on 12/06/2018'
                        },
                        {
                            path: 'https://i.imgur.com/JVSBmFT.jpg',
                            subcaption: 'Leaderboard Location'
                        }
                    ]
                },
                {
                    caption: 'TAS Tools',
                    images: [
                        {
                            path: 'https://i.imgur.com/yA4ABcz.jpg',
                            subcaption: 'Frame Advance in Use'
                        },
                        {
                            path: 'https://i.imgur.com/g1g6mQP.jpg',
                            subcaption: 'Frame Advance Menu'
                        },
                        {
                            path: 'https://i.imgur.com/yA4ABcz.jpg',
                            subcaption: 'Debug Data'
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
            // For each image in each feature, add a zIndex proprty with an initial value of 0
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
        }
    },
    created: function() {
        this.addControlLockBool();
        this.addImageZIndices();
        this.calcMedianImageIndices();
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