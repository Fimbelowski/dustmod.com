Vue.component('feature-image', {
    props: ['image-info'],
    data: function() {
        return {

        }
    },
    template: '<img v-if="imageInfo.isMedian || imageInfo.canLoad"\
                class="feature-image"\
                :src="imageInfo.path"\
                :key="imageInfo.key"\
                :style="{ zIndex: imageInfo.zIndex }"\
                :alt="\'Dustmod \' + imageInfo.subcaption">'
});