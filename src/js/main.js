window.onload = function() {
  var downloadComponent = new Vue({
    el: '#l-download',
    data: {
      choicesAreHidden: true,

      windowsIsFocused: false,
      macIsFocused: false,
      linuxIsFocused: false,

      windowsSubsectionsAreHidden: true,
      macSubsectionsAreHidden: true,
      linuxSubsectionsAreHidden: true
    },
    methods: {
      showOSChoices: function() {
        this.choicesAreHidden = false;
      },
      focusOSChoice: function(OSToFocus) {
        // Reset all OS Choices to be unfocused
        this.windowsIsFocused = false;
        this.macIsFocused = false;
        this.linuxIsFocused = false;

        // Focus the appropriate OS Choice
        if(OSToFocus === 'windows') {
          this.windowsIsFocused = true;
        } else if (OSToFocus === 'mac') {
          this.macIsFocused = true;
        } else {
          this.linuxIsFocused = true;
        }
      }
    }
  });
}
