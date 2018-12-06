Vue.component('feature', {
    props: ['feature-info'],
    data: function() {
        return {
            currentIndex: 0,
            
        }
    },
    computed: {
        renderedIndices: function() {
            var indices = [];

            // Calculate the first value of renderedIndices. If currentIndex is 0, wrap back around to the end of the images array.
            // Otherwise, the value is one less than currentIndex.
            if(this.currentIndex === 0) {
                indices.push(this.featureInfo.images.length - 1);
            } else {
                indices.push(this.currentIndex - 1);
            }

            // Calculate the second value of renderedIndices. This will be the currentIndex.
            indices.push(this.currentIndex);

            // Calculate the third value of renderedIndices. If the currentIndex is equal to the length of the images array, wrap back around to zero.
            // Otherwise, the value is one more than currentIndex
            if(this.currentIndex === this.featureInfo.images.length - 1) {
                indices.push(0);
            } else {
                indices.push(this.currentIndex + 1);
            }

            return indices;
        }
    },
    methods: {
        onPrevClicked: function() {
            // If the current index is zero, set it equal to the last index in featureInfo.images. Otherwise, decrement the current index.
            if(this.currentIndex === 0) {
                this.currentIndex = this.featureInfo.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        onNextClicked: function() {
            // If the current index is equal to the last index in featureInfo.images, set it equal to zero. Otherwise, increment the current index.
            if(this.currentIndex === this.featureInfo.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        slideLeft: function() {

        }
    },
    template: '<div class="feature">\
                    <img :src="featureInfo.images[0]" class="feature-image feature-image-offscreen feature-image-offscreen-left" :alt="featureInfo.caption">\
                    <img :src="featureInfo.images[1]" class="feature-image" :alt="featureInfo.caption">\
                    <img :src="featureInfo.images[2]" class="feature-image feature-image-offscreen feature-image-offscreen-right" :alt="featureInfo.caption">\
                    <feature-overlay @prev-clicked="onPrevClicked" @next-clicked="onNextClicked"></feature-overlay>\
                    <div class="feature-caption">\
                        <p>{{ featureInfo.caption }}</p>\
                    </div>\
                </div>'
});