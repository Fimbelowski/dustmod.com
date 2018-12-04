Vue.component('slider-grid', {
    data: function() {
        return {
            features: [
                {
                    caption: 'Online Multiplayer',
                    images: [
                        'dist/images/feature-images/multiplayer.jpg',
                        'dist/images/feature-images/multiplayer.jpg',
                        'dist/images/feature-images/multiplayer.jpg'
                    ]
                },
                {
                    caption: 'Quality of Life Improvements',
                    images: [
                        'dist/images/feature-images/quality-of-life.jpg',
                        'dist/images/feature-images/quality-of-life.jpg',
                        'dist/images/feature-images/quality-of-life.jpg'
                    ]
                },
                {
                    caption: 'Community Nexus',
                    images: [
                        'dist/images/feature-images/community-nexus-1.jpg',
                        'dist/images/feature-images/community-nexus-2.jpg',
                        'dist/images/feature-images/community-nexus-3.jpg'
                    ]
                },
                {
                    caption: 'Enhanced Custom Level Editor',
                    images: [
                        'dist/images/feature-images/editor.jpg',
                        'dist/images/feature-images/editor.jpg',
                        'dist/images/feature-images/editor.jpg'
                    ]
                },
                {
                    caption: 'Extended Leaderboards',
                    images: [
                        'dist/images/feature-images/extended-leaderboards.jpg',
                        'dist/images/feature-images/extended-leaderboards.jpg',
                        'dist/images/feature-images/extended-leaderboards.jpg'
                    ]
                },
                {
                    caption: 'Custom Level Scripting',
                    images: [
                        'dist/images/feature-images/scripting.jpg',
                        'dist/images/feature-images/scripting.jpg',
                        'dist/images/feature-images/scripting.jpg'
                    ]
                },
                {
                    caption: 'Daily Featured Custom Level',
                    images: [
                        'dist/images/feature-images/daily-level.jpg',
                        'dist/images/feature-images/daily-level.jpg',
                        'dist/images/feature-images/daily-level.jpg'
                    ]
                },
                {
                    caption: 'TAS Tools',
                    images: [
                        'dist/images/feature-images/tas-tools.jpg',
                        'dist/images/feature-images/tas-tools.jpg',
                        'dist/images/feature-images/tas-tools.jpg'
                    ]
                }
            ]
        }
    },
    template: '<div class="feature-grid">\
                    <feature\
                    v-for="feature in features"\
                    :feature-info="feature"\
                    :key="feature.caption"></feature>\
                </div>'
});