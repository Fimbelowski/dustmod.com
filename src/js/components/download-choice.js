Vue.component('download-choice', {
    props: ['os-info'],
    data: function() {
      return {
        
      }
    },
    methods: {

    },
    template: "<div class='os-choice-option'>\
                <a :href='\"#\" + osInfo.id' class='scroll-link no-decoration'>\
                <transition name='focus'>\
                  <button type='button' class='os-btn' :class='[osInfo.id + \"-btn\", osInfo.btnStyle]' @click='osClicked'>\
                    <h3 :class='osInfo.id + \"-text\"'>{{ osInfo.os }}</h3>\
                    <img :src='osInfo.iconPath' class='os-choice-img' :alt='osInfo.imgAlt'>\
                  </button>\
                </transition>\
                </a>\
                <download-subsection\
                v-for='subsection in osInfo.subsections'\
                :key='subsection.key'\
                :os='osInfo.id'\
                :subsectionInfo='subsection'>\
                </download-subsection>\
              </div>"
});