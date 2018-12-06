Vue.component('download-choice', {
    props: ['os-info'],
    data: function() {
      return {

      }
    },
    methods: {
      emitOSClickedEvent: function() {
        this.$emit('os-clicked', this.osInfo.id);
      }
    },
    template: "<div class='os-choice-option'>\
                <a :href='\"#\" + osInfo.id' class='scroll-link no-decoration'>\
                <transition name='focus'>\
                  <button type='button' class='os-btn' :class='[osInfo.id + \"-btn\", osInfo.btnState]' @click='emitOSClickedEvent'>\
                    <h3 :class='osInfo.id + \"-text\"'>{{ osInfo.os }}</h3>\
                    <img :src='osInfo.iconPath' class='os-choice-img' :alt='osInfo.imgAlt'>\
                  </button>\
                </transition>\
                </a>\
                <transition name='expand' v-for='subsection in osInfo.subsections' :key='subsection.key'>\
                  <download-subsection\
                  :os='osInfo.id'\
                  :subsectionInfo='subsection'\
                  v-if='osInfo.btnState === \"is-focused\"'>\
                  </download-subsection>\
                </transition>\
              </div>"
});