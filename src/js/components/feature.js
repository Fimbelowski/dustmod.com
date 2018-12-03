Vue.component('feature-slider', {
    props: ['feature-info'],
    data: function() {
        return {
            currentIndex: 0
        }
    },
    computed: {
        renderedIndices: function() {
            var indices = [
                this.currentIndex - 1,
                this.currentIndex,
                this.currentIndex + 1
            ];

            if(indices[0] <= 0) {
                indices[0] = this.featureInfo.images.length - 1;
            } else if(indices[2] > this.featureInfo.images.length - 1) {
                indices[2] = 0;
            }

            return indices;
        }
    },
    template: '<div class="feature">\
                    <img :src="featureInfo.images[0]" class="feature-image-offscreen feature-image-offscreen-left" :alt="featureInfo.caption">\
                    <img :src="featureInfo.images[1]" class="feature-image" :alt="featureInfo.caption">\
                    <img :src="featureInfo.images[2]" class="feature-image-offscreen feature-image-offscreen-right" :alt="featureInfo.caption">\
                    <feature-overlay></feature-overlay>\
                    <div class="feature-caption">\
                        <p>{{ featureInfo.caption }}</p>\
                    </div>\
                </div>'
});