Vue.component('feature', {
    props: ['feature-info'],
    data: function() {
        return {
            
        }
    },
    computed: {
        medianImageIndex: function() {
            return Math.floor(this.featureInfo.images.length / 2);
        }
    },
    template: '<div class="feature">\
                    <transition-group\
                    name="image-slider"\
                    tag="div"\
                    class="feature-images">\
                        <feature-image v-for="image in featureInfo.images"\
                        :image-info="image"\
                        :key="image.subcaption">\
                        </feature-image>\
                    </transition-group>\
                    <feature-overlay></feature-overlay>\
                    <div class="feature-caption-container">\
                        <div class="feature-caption-background">\
                            <p>{{ featureInfo.caption }} - <span>{{ featureInfo.images[medianImageIndex].subcaption }}</span></p>\
                        </div>\
                    </div>\
                </div>'
});