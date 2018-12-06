Vue.component('slider-grid', {
    data: function() {
        return {
            features: [
                {
                    index: 0,
                    caption: 'Online Multiplayer',
                    images: [
                        {
                            path: 'dist/images/feature-images/multiplayer-1.jpg',
                            key: 'multiplayer-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-2.jpg',
                            key: 'multiplayer-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-3.jpg',
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
                            path: 'dist/images/feature-images/multiplayer-1.jpg',
                            key: 'multiplayer-1',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-2.jpg',
                            key: 'multiplayer-2',
                            zIndex: 0
                        },
                        {
                            path: 'dist/images/feature-images/multiplayer-3.jpg',
                            key: 'multiplayer-3',
                            zIndex: 0
                        }
                    ],
                    controlsAreLocked: false
                },
                
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