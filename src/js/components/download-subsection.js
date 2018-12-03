Vue.component('download-subsection', {
    props: ['os', 'subsection-info'],
    data: function() {
      return {
        styles: [
          'is-hidden',
          'is-collapsed'
        ]
      }
    },
    template: "<div class='dl-subsection' :class='[os + \"-subsection\", styles]'>\
                <p v-for='link in subsectionInfo.links'>\
                  <a :href='link.href'>{{ link.text }}</a>\
                </p>\
              </div>"
});