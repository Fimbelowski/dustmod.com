window.onload = function() {
  var vm = new Vue({
    el: '#root',
    data: {
      osChoiceGridStyles: [
        'is-hidden',
        'is-collapsed'
      ],
      focusedOS: ''
    },
    methods: {
      expandOSChoiceGrid: function() {
        /*
          This function will expand the OS Choice Grid with a smooth scroll-down effect. To do this, we need to first need
          to remove the 'is-hidden' class to show the content (with a max-height of 0). Then, we need to remove the 'is-collapsed'
          class to make the transition smooth.

          To do this we will use window.requestAnimationFrame to make sure that the class removals will happen on consecutive,
          repaints and avoid the transition being choppy.
        */
        window.requestAnimationFrame(function() {
          vm.osChoiceGridStyles.splice(0, 1);

          window.requestAnimationFrame(function() {
            vm.osChoiceGridStyles.splice(0, 1);
          });
        });
      },
      focusOS: function(os) {
        this.focusedOS = os;
      }
    }
  });
}