Vue.component('feature-overlay', {
    props: [],
    data: function() {
        return {
            
        }
    },
    methods: {
        emitPrevClicked: function() {
            this.$emit('prev-clicked');
        },
        emitNextClicked: function() {
            this.$emit('next-clicked');
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