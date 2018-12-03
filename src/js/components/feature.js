Vue.component('feature-slider', {
    props: ['feature-info'],
    data: function() {
        return {

        }
    },
    template: '<div class="feature">\
                    <img v-for="image in featureInfo.images"\
                    :src="image"\
                    :alt="featureInfo.caption"\
                    class="feature-background">\
                    <feature-overlay></feature-overlay>\
                    <div class="feature-caption">\
                        <p>{{ featureInfo.caption }}</p>\
                    </div>\
                </div>'
});