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
          @change="handleOsChange()"
        />
        <v-select
          v-model="graphics"
          :disabled="os !== 'windows'"
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
          :disabled="os === null"
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
          value: '32bit',
        },
        {
          text: '64-Bit',
          value: '64bit',
        },
      ],
      graphics: null,
      graphicsOptions: [
        {
          text: 'DirectX 12',
          value: 'directX12',
        },
        {
          text: 'DirectX 9',
          value: 'directX9',
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
          value: 'windows',
        },
        {
          text: 'Mac OS X',
          value: 'mac',
        },
        {
          text: 'Linux',
          value: 'linx',
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
          value: 'drmFree',
        },
      ],
    };
  },

  computed: {
    /** @type {string} */
    architectureHint() {
      return this.os === 'windows'
        ? 'This should match the architecture of your Steam installation, NOT your OS.'
        : null;
    },

    /** @type {boolean} */
    architectureSelectDisabled() {
      if (this.os === null) {
        return true;
      }

      if (this.os === 'windows' && this.graphics === null) {
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
    platformSelectDisabled() {
      if (this.os === null) {
        return true;
      }

      return this.os === 'windows' ? this.graphics === null : false;
    },
  },

  methods: {
    /** @return {void} */
    handleOsChange() {
      this.graphics = null;
    },
  },
};
</script>
