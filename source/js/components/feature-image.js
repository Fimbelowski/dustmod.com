Vue.component('feature-image', {
    props: ['image-info'],
    data: function() {
        return {

        }
    },
    computed: {
        styleObj: function() {
            return {
                'z-index': this.imageInfo.zIndex
            }
        }
    },
    template: '<img v-if="imageInfo.isMedian || imageInfo.canLoad"\
                class="feature-image"\
                :src="imageInfo.path"\
                :key="imageInfo.key"\
                :style="styleObj"\
                :alt="\'Dustmod \' + imageInfo.subcaption">'
});