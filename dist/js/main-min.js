window.onload=function(){var s=new Vue({el:"#download",data:{dlButtonDisabled:!1,OSChoicesAreHidden:!0,OSChoicesAreCollapsed:!0,focusedOS:""},computed:{OSChoicesStyleObj:function(){return{"is-hidden":this.OSChoicesAreHidden,"is-collapsed":this.OSChoicesAreCollapsed}},windowsStyleObj:function(){return{"is-focused":"windows"===this.focusedOS,"is-semi-transparent":this.focusedOS&&"windows"!==this.focusedOS}},macStyleObj:function(){return{"is-focused":"mac"===this.focusedOS,"is-semi-transparent":this.focusedOS&&"mac"!==this.focusedOS}},linuxStyleObj:function(){return{"is-focused":"linux"===this.focusedOS,"is-semi-transparent":this.focusedOS&&"linux"!==this.focusedOS}}},methods:{showOSChoices:function(){this.OSChoicesAreHidden=!1,this.dlButtonDisabled=!0,window.setTimeout(function(){s.expandOSChoices()},0)},expandOSChoices:function(){console.log("test"),this.OSChoicesAreCollapsed=!1},focusOSChoice:function(s){this.focusedOS=s}}})};