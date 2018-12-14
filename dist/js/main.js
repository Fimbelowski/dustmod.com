window.onload=function(){var e=new Vue({el:"#root",data:{choicesAreShown:!1,focusedOS:"",version:""},methods:{focusOS:function(e){this.focusedOS=e},getVersion:function(){var t=new XMLHttpRequest;t.open("GET","http://dustkid.com/backend8/dustmod_version.php",!0),t.onload=function(){e.version=this.responseText},t.send()}},created:function(){this.getVersion()}})},Vue.component("download-choice",{props:["os-info"],data:function(){return{}},methods:{emitOSClickedEvent:function(){this.$emit("os-clicked",this.osInfo.id)}},template:"<div class='os-choice-option'>                <a :href='\"#\" + osInfo.id' class='scroll-link no-decoration'>                <transition name='focus'>                  <button type='button' class='os-btn' :class='[osInfo.id + \"-btn\", osInfo.btnState]' @click='emitOSClickedEvent'>                    <h3 :class='osInfo.id + \"-text\"'>{{ osInfo.os }}</h3>                    <img :src='osInfo.iconPath' class='os-choice-img' :alt='osInfo.imgAlt'>                  </button>                </transition>                </a>                <transition name='expand' v-for='subsection in osInfo.subsections' :key='subsection.key'>                  <download-subsection                  :os='osInfo.id'                  :subsectionInfo='subsection'                  v-if='osInfo.btnState === \"is-focused\"'>                  </download-subsection>                </transition>              </div>"}),Vue.component("download-grid",{props:["styles"],data:function(){return{osChoices:[{os:"Windows",iconPath:"dist/images/windows-logo.png",btnState:"",subsections:[{note:"Requires Win10 (Best Performance)",links:[{text:"DirectX 12 (Steam)",href:"https://dustkid.com/getdustmod/win32_dx12_steam"},{text:"DirectX 12 (DRM-Free)",href:"https://dustkid.com/getdustmod/win32_dx12_drmfree"}]},{note:"The same as vanilla Dustforce",links:[{text:"DirectX 9 (Steam)",href:"https://dustkid.com/getdustmod/win32_steam"},{text:"DirectX 9 (DRM-Free)",href:"https://dustkid.com/getdustmod/win32_drmfree"}]},{note:"OpenGL Based",links:[{text:"SDL2 (Steam)",href:"https://dustkid.com/getdustmod/win32_sdl2_steam"},{text:"SDL2 (DRM-Free)",href:"https://dustkid.com/getdustmod/win32_sdl2_drmfree"}]}],subsectionStyles:["is-hidden","is-collapsed"]},{os:"Mac OS X",iconPath:"dist/images/apple-logo.png",btnState:"",subsections:[{note:"",links:[{text:"64-Bit (Steam)",href:"https://dustkid.com/getdustmod/osx64_steam"},{text:"64-Bit (DRM-Free)",href:"https://dustkid.com/getdustmod/osx64_drmfree"}]}],subsectionStyles:["is-hidden","is-collapsed"]},{os:"Linux",iconPath:"dist/images/linux-logo.png",btnState:"",subsections:[{note:"",links:[{text:"64-Bit (Steam)",href:"https://dustkid.com/getdustmod/linux64_steam"},{text:"64-Bit (DRM-Free)",href:"https://dustkid.com/getdustmod/linux64_drmfree"}]}],subsectionStyles:["is-hidden","is-collapsed"]}]}},methods:{addOSIDProperty:function(){for(var e=0;e<this.osChoices.length;e++)this.osChoices[e].id=this.osChoices[e].os.replace(/\s+/g,"-").toLowerCase()},addOSImgAltProperty:function(){for(var e=0;e<this.osChoices.length;e++)this.osChoices[e].imgAlt=this.osChoices[e].os+" Logo"},addOSSubsectionKeyProperty:function(){for(var e=0;e<this.osChoices.length;e++)for(var t=0;t<this.osChoices[e].subsections.length;t++)this.osChoices[e].subsections[t].key=this.osChoices[e].id+(t+1)},onOSClicked:function(e){for(var t=0;t<this.osChoices.length;t++)this.osChoices[t].id===e?this.osChoices[t].btnState="is-focused":this.osChoices[t].btnState="is-semi-transparent"}},created:function(){this.addOSIDProperty(),this.addOSImgAltProperty(),this.addOSSubsectionKeyProperty()},template:"<div class='os-choice-grid' :class='styles'>                <download-choice                v-for='os in osChoices'                :key='os.id'                :id='os.id'                :os-info='os'                @os-clicked='onOSClicked'>                </download-choice>                </div>"}),Vue.component("download-subsection",{props:["os","subsection-info"],data:function(){return{styles:["is-hidden","is-collapsed"]}},template:"<div class='dl-subsection' :class='[os + \"-subsection\", styles]'>                <p v-if='subsectionInfo.note'>{{ subsectionInfo.note }}</p>                <p v-for='link in subsectionInfo.links'>                  <a :href='link.href'>{{ link.text }}</a>                </p>              </div>"}),Vue.component("download-version",{data:function(){return{versionNumber:""}},methods:{getVersionNumber:function(){var e=new XMLHttpRequest;e.open("GET","http://dustkid.com/backend8/dustmod_version.php",!0),e.onload=function(){console.log("test");var e=JSON.parse(this.response);console.log(e)},e.send()}},created:function(){this.getVersionNumber()},template:"<h3>Version {{ versionNumber }}</h3>"}),Vue.component("feature-grid",{data:function(){return{features:[{caption:"Online Multiplayer",images:[{path:"dist/images/feature-images/multiplayer-1.jpg",subcaption:"Four Player",zIndex:0},{path:"dist/images/feature-images/multiplayer-2.jpg",subcaption:"Two Player",zIndex:0},{path:"dist/images/feature-images/multiplayer-3.jpg",subcaption:"Three Player",zIndex:0}]},{caption:"Quality of Life",images:[{path:"dist/images/feature-images/qol-1.jpg",subcaption:"Input Display",zIndex:0},{path:"dist/images/feature-images/qol-2.jpg",subcaption:"Replay Ghosts",zIndex:0},{path:"dist/images/feature-images/qol-3.jpg",subcaption:"In-Game Configuration",zIndex:0},{path:"dist/images/feature-images/qol-4.jpg",subcaption:"Extended Virtual Tome",zIndex:0},{path:"dist/images/feature-images/qol-5.jpg",subcaption:"Game Save Recovery/Reset",zIndex:0}]},{caption:"Community Nexus",images:[{path:"dist/images/feature-images/community-nexus-1.jpg",subcaption:"Single Screen Map Pack",zIndex:0},{path:"dist/images/feature-images/community-nexus-2.jpg",subcaption:"Dustforce Arcade",zIndex:0},{path:"dist/images/feature-images/community-nexus-3.jpg",subcaption:"Entrance",zIndex:0},{path:"dist/images/feature-images/community-nexus-4.jpg",subcaption:"Dark Forest Map Pack",zIndex:0},{path:"dist/images/feature-images/community-nexus-5.jpg",subcaption:"CMR 54 Nexus",zIndex:0}]},{caption:"Extended Leaderboards",images:[{path:"dist/images/feature-images/leaderboards-1.jpg",subcaption:"Lowjump Leaderboards",zIndex:0},{path:"dist/images/feature-images/leaderboards-2.jpg",subcaption:"Character Filtering",zIndex:0},{path:"dist/images/feature-images/leaderboards-3.jpg",subcaption:"TAS Leaderboards",zIndex:0}]},{caption:"Custom Level Scripting",images:[{path:"dist/images/feature-images/scripting-1.jpg",subcaption:"Multiple Characters",zIndex:0},{path:"dist/images/feature-images/scripting-2.jpg",subcaption:"Reactive Elements",zIndex:0},{path:"dist/images/feature-images/scripting-3.jpg",subcaption:"Custom Visual Effects",zIndex:0},{path:"dist/images/feature-images/scripting-4.jpg",subcaption:"Custom Characters/Movesets",zIndex:0},{path:"dist/images/feature-images/scripting-5.jpg",subcaption:"Custom Visual Elements",zIndex:0}]},{caption:"Daily Featured Custom Level",images:[{path:"dist/images/feature-images/daily-1.jpg",subcaption:"Leaderboard",zIndex:0},{path:"dist/images/feature-images/daily-2.jpg",subcaption:"History",zIndex:0},{path:"dist/images/feature-images/daily-3.jpg",subcaption:"Entrance",zIndex:0},{path:"dist/images/feature-images/daily-4.jpg",subcaption:"Featured Level on 12/06/2018",zIndex:0},{path:"dist/images/feature-images/daily-5.jpg",subcaption:"Leaderboard Location",zIndex:0}]},{caption:"TAS Tools",images:[{path:"dist/images/feature-images/tas-tools-1.jpg",subcaption:"Frame Advance in Use",zIndex:0},{path:"dist/images/feature-images/tas-tools-2.jpg",subcaption:"Frame Advance Menu",zIndex:0},{path:"dist/images/feature-images/tas-tools-3.jpg",subcaption:"Debug Data",zIndex:0}]}]}},methods:{lockControls:function(e){this.features[e].controlsAreLocked=!0},unlockControls:function(e){this.features[e].controlsAreLocked=!1},slideImagesLeft:function(e){!1===this.features[e].controlsAreLocked&&(this.lockControls(e),this.features[e].images[this.features[e].images.length-1].zIndex=-1,this.features[e].images.unshift(this.features[e].images.pop()),setTimeout(function(){this.resetAllZIndexes(e),this.unlockControls(e)}.bind(this),400))},slideImagesRight:function(e){!1===this.features[e].controlsAreLocked&&(this.lockControls(e),this.features[e].images[0].zIndex=-1,this.features[e].images.push(this.features[e].images.shift()),setTimeout(function(){this.resetAllZIndexes(e),this.unlockControls(e)}.bind(this),400))},resetAllZIndexes:function(e){for(var t=0;t<this.features[e].images.length;t++)this.features[e].images[t].zIndex=0},addFeatureIndices:function(){for(var e=0;e<this.features.length;e++)this.features[e].index=e},addControlLockBool:function(){for(var e=0;e<this.features.length;e++)this.features[e].controlsAreLocked=!1},addImageZIndices:function(){for(var e=0;e<this.features.length;e++)for(var t=0;t<this.features[e].images.length;t++)this.features[e].images[t].zIndex=0},calcMedianImageIndices:function(){for(var e=0;e<this.features.length;e++)for(var t=Math.floor(this.features[e].images.length/2),s=0;s<this.features[e].images.length;s++)this.features[e].images[s].isMedian=t===s},addImageLoadBool:function(){for(var e=0;e<this.features.length;e++)for(var t=0;t<this.features[e].images.length;t++)this.features[e].images[t].canLoad=!0},loadAllImages:function(){for(var e=0;e<this.features.length;e++)for(var t=0;t<this.features[e].images.length;t++)this.features[e].images[t].canLoad=!0}},created:function(){this.addFeatureIndices(),this.addControlLockBool(),this.calcMedianImageIndices(),this.addImageLoadBool()},mounted:function(){this.$nextTick(function(){this.loadAllImages()})},template:'<div class="feature-grid">                    <feature                    v-for="feature in features"                    :feature-info="feature"                    :key="feature.caption"                    @prev-clicked="slideImagesLeft"                    @next-clicked="slideImagesRight"></feature>                </div>'}),Vue.component("feature-image",{props:["image-info"],data:function(){return{}},computed:{styleObj:function(){return{"z-index":this.imageInfo.zIndex}}},template:'<img v-if="imageInfo.isMedian || imageInfo.canLoad"                class="feature-image"                :src="imageInfo.path"                :key="imageInfo.key"                :style="styleObj"                :alt="\'Dustmod \' + imageInfo.subcaption">'}),Vue.component("feature-overlay",{props:[],data:function(){return{}},methods:{emitPrevClicked:function(){this.$parent.$emit("prev-clicked",this.$parent.featureInfo.index)},emitNextClicked:function(){this.$parent.$emit("next-clicked",this.$parent.featureInfo.index)}},template:'<div class="feature-slider-controls">                    <div class="feature-slider-btn feature-slider-prev" @click="emitPrevClicked">                        <img src="dist/images/prev.png" class="slider-icon" alt="previous image">                    </div>                    <div class="feature-slider-btn feature-slider-next" @click="emitNextClicked">                        <img src="dist/images/next.png" class="slider-icon" alt="next image">                    </div>                </div>'}),Vue.component("feature",{props:["feature-info"],data:function(){return{}},computed:{medianImageIndex:function(){return Math.floor(this.featureInfo.images.length/2)}},template:'<div class="feature">                    <transition-group                    name="image-slider"                    tag="div"                    class="feature-images">                        <feature-image v-for="image in featureInfo.images"                        :image-info="image"                        :key="image.subcaption">                        </feature-image>                    </transition-group>                    <feature-overlay></feature-overlay>                    <div class="feature-caption-container">                        <div class="feature-caption-background">                            <p>{{ featureInfo.caption }} - <span>{{ featureInfo.images[medianImageIndex].subcaption }}</span></p>                        </div>                    </div>                </div>'});