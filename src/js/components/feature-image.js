Vue.component('feature-image', {
    props: ['image-info'],
    data: function() {
        return {

        }
    },
    computed: {
    },
    template: '<img v-if="featureImage.isMedian"\
                class="feature-image"\
                :src="imageInfo.path"\
                :key="imageInfo.key"\
                :style="{ zIndex: imageInfo.zIndex }"\
                :alt="\'Dustmod\' + imageInfo.subcaption">'
});