Vue.component('feature', {
    props: ['feature-info'],
    data: function() {
        return {
            
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
                    <div class="feature-caption">\
                        <p>{{ featureInfo.caption }}</p>\
                    </div>\
                </div>'
});