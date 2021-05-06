<template>
  <v-dialog
    v-model="displayProxy"
    class="download-dialog"
    width="500"
  >
    <v-card>
      <v-card-title>
        Download
      </v-card-title>
      <v-card-text>
        <v-select
          v-model="os"
          :items="osOptions"
          label="Operating System"
          @change="handleOsChange($event)"
        />
        <v-select
          v-model="graphics"
          :disabled="os !== 'win'"
          :items="graphicsOptions"
          label="Graphics API (Windows Only)"
        />
        <v-select
          v-model="platform"
          :disabled="platformSelectDisabled"
          :items="platformOptions"
          label="Platform"
        />
        <v-select
          v-model="architecture"
          :disabled="architectureSelectDisabled"
          :hint="architectureHint"
          :items="architectureOptions"
          label="System Architecture"
          :persistent-hint="architectureHint !== null && !architectureSelectDisabled"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="displayProxy = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="#9b59c8"
          :disabled="downloadButtonDisabled"
          :href="downloadHref"
          text
        >
          Download
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DownloadDialog',

  props: {
    display: {
      required: true,
      type: Boolean,
    },
  },

  data() {
    return {
      architecture: null,
      architectureOptions: [
        {
          text: '32-Bit',
          value: '32',
        },
        {
          text: '64-Bit',
          value: '64',
        },
      ],
      graphics: null,
      graphicsOptions: [
        {
          text: 'DirectX 12',
          value: 'dx12',
        },
        {
          text: 'DirectX 9',
          value: '',
        },
        {
          text: 'SDL2',
          value: 'sdl2',
        },
      ],
      os: null,
      osOptions: [
        {
          text: 'Windows',
          value: 'win',
        },
        {
          text: 'Mac OS X',
          value: 'osx',
        },
        {
          text: 'Linux',
          value: 'linux',
        },
      ],
      platform: null,
      platformOptions: [
        {
          text: 'Steam',
          value: 'steam',
        },
        {
          text: 'DRM Free',
          value: 'drmfree',
        },
      ],
    };
  },

  computed: {
    /** @type {string} */
    architectureHint() {
      return this.platform === 'steam'
        ? 'This should match the architecture of your Steam installation (typically 32-Bit), NOT your OS.'
        : null;
    },

    /** @type {boolean} */
    architectureSelectDisabled() {
      if (this.os !== 'win') {
        return true;
      }

      return this.platform === null;
    },

    /** @type {boolean} */
    displayProxy: {
      get() {
        return this.display;
      },
      set(newValue) {
        this.$emit('update:display', newValue);
      },
    },

    /** @type {boolean} */
    downloadButtonDisabled() {
      return this.os === null
        || (this.os === 'win' && this.graphics === null)
        || this.platform === null
        || this.architecture === null;
    },

    /** @type {string} */
    downloadHref() {
      const graphics = [null, ''].includes(this.graphics) ? '' : `_${this.graphics}`;

      return `https://dustkid.com/getdustmod/${this.os}${this.architecture}${graphics}_${this.platform}`;
    },

    /** @type {boolean} */
    platformSelectDisabled() {
      if (this.os === null) {
        return true;
      }

      return this.os === 'win' ? this.graphics === null : false;
    },
  },

  methods: {
    /** @return {void} */
    handleOsChange(event) {
      this.architecture = ['linux', 'osx'].includes(event) ? '64' : null;

      this.graphics = null;
      this.platform = null;
    },
  },
};
</script>
