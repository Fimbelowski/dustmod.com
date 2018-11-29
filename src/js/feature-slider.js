Vue.component('feature-slider', {
    data: function() {
        return {
            imagePaths: [],
            currentIndex: null,

        }
    },
    template: "<img src='dist/images/feature-images/multiplayer.jpg' class='feature-background' alt='placeholder'>\
                <img src='dist/images/feature-images/multiplayer.jpg' class='feature-background' alt='placeholder'>\
                <img src='dist/images/feature-images/multiplayer.jpg' class='feature-background' alt='placeholder'>"
});