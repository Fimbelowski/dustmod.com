<template>
  <v-app>
    <v-main>
      <v-app-bar class="px-4 py-1" ref="header">
        <v-img class="mr-4" max-width="40" src="./assets/apple.png" />
        <h1 class="heading">DUSTMOD</h1>
      </v-app-bar>
      <HeroImageSlider :max-height="heroImageMaxHeight" />
      <PageSection title="What is Dustmod?">
        <v-card>
          <v-card-text>
            <blockquote class="text-body-1">
              Dustmod is a hobby project that came as a natural extension to
              dustkid.com, a website that I operate that collects all sorts of
              Dustforce related statistics. While integrating dustkid.com
              curated leaderboards into Dustmod and extending the replay system
              to give richer metadata was an initial goal, the project has
              expanded to include quite a variety of extended functionality on
              top of the base game. It's my hope that Dustmod continues to be a
              way to launch deep into the nearly unlimited content that
              Dustforce and the surrounding community offers.
            </blockquote>
            <div class="text-body-1 text-right">
              -msg555, Creator of Dustmod and
              <a
                href="http://dustkid.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                dustkid.com
              </a>
            </div>
          </v-card-text>
        </v-card>
      </PageSection>
      <PageSection>
        <v-row align="center" justify="center">
          <DownloadButtonFlavorImage class="mr-10" />
          <DownloadDialog v-model="showDownloadDialog" />
        </v-row>
      </PageSection>
      <PageSection title="Installation">
        <v-card>
          <v-tabs
            v-model="tab"
            align-tabs="center"
            color="#9b59c8"
          >
            <v-tab value="windows">Windows</v-tab>
            <v-tab value="linux">Linux</v-tab>
            <v-tab value="osx">OSX</v-tab>
          </v-tabs>

          <v-card-text class="text-body-1 mt-4">
            <v-tabs-window v-model="tab">
            <v-tabs-window-item value="windows">


                <h5 class="mb-4 text-h5">Windows Installation</h5>
                <v-alert
                  color="#9b59c8"
                  variant="tonal"
                  class="mb-6 mt-2"
                  density="compact"
                  icon="mdi-alert"
                >
                  <strong>Important:</strong> Most Steam installations of Dustforce are <strong>32-bit</strong>, even if your Windows operating system is 64-bit!</v-alert>
                <ol class="installation-steps mb-4">
                  <li>
                    Download the version of Dustmod suitable for your Windows installation
                    of Dustforce.
                  </li>
                  <li class="mb-2">
                    Unzip the contained files directly into the directory where Dustforce is
                    already installed. For Steam, this is usually located at:
                    <pre class="bg-grey-darken-3 pa-3 rounded mt-2 text-body-2"><code>C:\Program Files (x86)\Steam\steamapps\common\Dustforce\</code></pre>
                  </li>
                </ol>

                <v-divider class="mb-8"></v-divider>

                <h5 class="mb-4 text-center text-h5">Adding Dustmod to Steam</h5>
                <ol class="installation-steps">
                  <li>
                    In Steam, navigate to
                    <strong>Games</strong> <v-icon size="small">mdi-chevron-right</v-icon> <strong>Add a Non-Steam Game to My Library</strong>.
                  </li>
                  <li class="mb-2">
                    Find and select the Dustmod executable. It will typically be located at:
                    <pre class="bg-grey-darken-3 pa-3 rounded mt-2 text-body-2"><code>C:\Program Files (x86)\Steam\steamapps\common\Dustforce\dustmod.exe</code></pre>
                  </li>
                </ol>
              </v-tabs-window-item>

              <v-tabs-window-item value="linux">
                <p class="text-caption text-medium-emphasis mb-6 font-italic">
                  Linux installation instructions courtesy of maybetta.
                </p>

                <h5 class="mb-4 text-h5">Steam Deck & Arch Linux Installation</h5>
                <ol class="installation-steps mb-4">
                  <li>
                    If you are on a Steam Deck, first switch to <strong>Desktop Mode</strong>.
                  </li>
                  <li>
                    Download the Dustmod version suitable for <strong>Linux</strong>, typically <strong>64-bit</strong> Steam
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1axbQj6Twr91mKwgdtV-jTIfMQGMpgEGf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download the required dependencies</a> (this zip contains <code>steam_appid.txt</code> and <code>libidn.so.11</code>).
                  </li>
                  <li class="mb-2">
                    Unzip the Dustmod files directly into your main Dustforce game folder. On the Steam Deck, this is usually located at:
                    <pre class="bg-grey-darken-3 pa-3 rounded mt-2 text-body-2"><code>/home/deck/.local/share/Steam/steamapps/common/Dustforce/</code></pre>
                  </li>
                  <li>
                    Place <code>steam_appid.txt</code> directly into that main Dustforce game folder.
                  </li>
                  <li>
                    Place <code>libidn.so.11</code> into the <code>lib64</code> folder (located inside the main Dustforce folder).
                  </li>
                  <li class="mb-2">
                    Make the Dustmod executable runnable. You can do this via the file explorer by Right-Clicking <code>dustmod.bin.x64_86</code> <v-icon size="small">mdi-chevron-right</v-icon> <strong>Properties</strong> <v-icon size="small">mdi-chevron-right</v-icon> <strong>Permissions</strong> and checking "Is executable", or by running this command in your terminal:
                    <pre class="bg-grey-darken-3 pa-3 rounded mt-2 text-body-2"><code>chmod +x ~/.local/share/Steam/steamapps/common/Dustforce/dustmod.bin.x64_86</code></pre>
                  </li>
                </ol>

                <v-divider class="mb-8"></v-divider>

                <h5 class="mb-4 text-center text-h5">Adding Dustmod to Steam</h5>
                <ol class="installation-steps">
                  <li>
                    In Steam, navigate to
                    <kbd>Games -> Add a Non-Steam Game to My Library</kbd>
                  </li>
                  <li>
                    Find and select the <code>dustmod.bin.x64_86</code> executable. You can now launch it directly from Steam (including in Gaming Mode on the Steam Deck).
                  </li>
                </ol>
              </v-tabs-window-item>

              <v-tabs-window-item value="osx">
                <p class="text-caption text-medium-emphasis mb-6 font-italic">
                  OSX installation instructions courtesy of Ukkiez.
                </p>
                <h5 class="mb-4 text-h5">macOS/OSX Installation</h5>
                <p class="mb-6">
                  First, install Dustforce via Steam as you normally would.
                </p>

                <h5 class="mb-4 text-h5">Method 1 - Install Script</h5>
                <ol class="installation-steps mb-4">
                  <li>Download Dustmod and keep it in your default <strong>Downloads</strong> folder.</li>
                  <li>
                    <a href="https://drive.google.com/file/d/1SeButPOi5js3NkAOPDuXYHYim-kPuwqd/view?usp=sharing" download>Download the install script</a>, open the zip file, and run the resulting <code>.command</code> script. (Open with <v-icon size="small">mdi-chevron-right</v-icon> <strong>Terminal</strong> application)
                  </li>
                  <li>Done. Run Dustforce through Steam as you normally would.</li>
                </ol>
                <v-divider class="mb-8"></v-divider>

                <h5 class="mb-4 text-h5">Method 2 - Manual Installation</h5>
                <ol class="installation-steps mb-4">
                  <li>Download Dustmod, and keep it in your default <strong>Downloads</strong> folder.</li>
                  <li>Unzip the file.</li>
                  <li>Open Mac's <strong>Terminal</strong> Application.</li>
                  <li class="mb-2">
                    Run the following command:
                    <pre class="bg-grey-darken-3 pa-3 rounded mt-2 text-body-2"><code>chmod a+x ~/Downloads/dustmod.osx64_steam/MacOS/Dustforce</code></pre>
                  </li>
                  <li>Open <strong>Finder</strong>, and go to your Downloads folder.</li>
                  <li>Open a new Finder window (<kbd>cmd</kbd> + <kbd>N</kbd>), and do the following instructions there.</li>
                  <li class="mb-2">
                    Use <strong>Go</strong> <v-icon size="small">mdi-chevron-right</v-icon> <strong>Go To Folder…</strong> (<kbd>shift</kbd> + <kbd>cmd</kbd> + <kbd>G</kbd>) and enter:
                    <pre class="bg-grey-darken-3 pa-3 rounded mt-2 text-body-2"><code>~/Library/Application Support/Steam/steamapps/common/Dustforce</code></pre>
                  </li>
                  <li>Right-Click the Dustforce Application <v-icon size="small">mdi-chevron-right</v-icon> <strong>Show Package Contents</strong>.</li>
                  <li>
                    Go to <strong>Contents</strong> <v-icon size="small">mdi-chevron-right</v-icon> <strong>MacOS</strong>, and replace the Dustforce file here with the one you downloaded. It's in the <code>dustmod.osx64_steam</code> folder you downloaded and unzipped, in the <code>MacOS</code> folder.
                  </li>
                  <li>Go back, to <strong>Contents</strong> <v-icon size="small">mdi-chevron-right</v-icon> <strong>Resources</strong>.</li>
                  <li>
                    In your <code>dustmod.osx64_steam</code> folder, go to <code>Resources</code>, and drag the entire folder contents in here while holding <kbd>Alt</kbd> / <kbd>Option</kbd>, which reveals the merge option. Use this merging option.
                  </li>
                  <li>Done. Run Dustforce through Steam as you normally would.</li>
                </ol>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </PageSection>
      <PageSection title="Support">
        <v-card>
          <v-card-text class="text-body-1">
            <div class="mb-4">
              If you need any assistance installing or troubleshooting Dustmod
              please feel free to click the button below to join the Dustforce
              Discord server for help.
            </div>
            <div class="text-center">
              <v-btn
                color="#9b59c8"
                href="https://discord.gg/4F9WQeV"
                max-width="100%"
                rel="noopener roreferrer"
                target="_blank"
              >
                Join the Dustforce Discord Server
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </PageSection>
      <v-footer>
        <v-row class="py-2" justify="center">
          &copy; Christopher Fimbel {{ new Date().getFullYear() }}
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, type ComputedRef, ref, useTemplateRef } from "vue";
import { useDisplay } from "vuetify";

import PageSection from "./components/PageSection.vue";

const headerRef = useTemplateRef("header");

const { mdAndDown } = useDisplay();

const showDownloadDialog = ref(false);
const tab = ref("windows");

const heroImageMaxHeight: ComputedRef<number | undefined> = computed(() => {
  if (headerRef.value === null) {
    return 0;
  } else if (mdAndDown.value) {
    return undefined;
  }

  const height = headerRef.value.height;
  const heightAsNumber =
    typeof height === "number" ? height : parseInt(height, 10);

  return window.innerHeight - heightAsNumber;
});
</script>

<style lang="scss">
@font-face {
  font-family: "Caracteres";
  src: url("@/assets/Caracteres L1.ttf") format("truetype");
}

.heading {
  font-family: Caracteres, sans-serif;
  letter-spacing: 1px;
}

.installation-steps {
  list-style-position: inside;
}
</style>
