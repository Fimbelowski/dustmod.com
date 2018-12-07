Vue.component('download-version', {
    data: function() {
        return {
            versionNumber: ''
        }
    },
    methods: {
        getVersionNumber: function() {
            var request = new XMLHttpRequest();

            request.open('GET', 'http://dustkid.com/backend8/dustmod_version.php', true);

            request.onload = function() {
                console.log('test');
                var data = JSON.parse(this.response);
                console.log(data);
            }

            request.send();
        }
    },
    created: function() {
        this.getVersionNumber();
    },
    template: '<h3>Version {{ versionNumber }}</h3>'
});