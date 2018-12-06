Vue.component('feature-overlay', {
    props: [],
    data: function() {
        return {
            
        }
    },
    methods: {
        emitPrevClicked: function() {
            this.$parent.$emit('prev-clicked', this.$parent.featureInfo.index);
        },
        emitNextClicked: function() {
            this.$parent.$emit('next-clicked', this.$parent.featureInfo.index);
        }
    },
    template: '<div class="feature-slider-controls">\
                    <div class="feature-slider-btn feature-slider-prev" @click="emitPrevClicked">\
                        <img src="dist/images/prev.png" class="slider-icon" alt="previous image">\
                    </div>\
                    <div class="feature-slider-btn feature-slider-next" @click="emitNextClicked">\
                        <img src="dist/images/next.png" class="slider-icon" alt="next image">\
                    </div>\
                </div>'
});