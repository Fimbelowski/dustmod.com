Vue.component('feature', {
    props: ['feature-info'],
    data: function() {
        return {
            
        }
    },
    computed: {
        middleImageIndex: function() {
            return Math.floor(this.featureInfo.images.length / 2);
        }
    },
    template: '<div class="feature">\
                    <transition-group\
                    name="image-slider"\
                    tag="div"\
                    class="feature-images">\
                        <img v-for="image in featureInfo.images"\
                        :src="image.path"\
                        class="feature-image"\
                        :key="image.key"\
                        :style="{ zIndex: image.zIndex }"\
                        :alt="\'Dustmod \' + featureInfo.caption">\
                    </transition-group>\
                    <feature-overlay></feature-overlay>\
                    <div class="feature-caption-container">\
                        <div class="feature-caption-background">\
                            <p>{{ featureInfo.caption }} - <span>{{ featureInfo.images[middleImageIndex].subcaption }}</span></p>\
                        </div>\
                    </div>\
                </div>'
});