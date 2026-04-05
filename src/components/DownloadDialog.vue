<template>
  <v-dialog class="download-dialog" width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="#9b59c8" size="x-large"
        >Download</v-btn
      >
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title> Download </v-card-title>
        <v-card-text>
          <v-select
            @update:modelValue="handleOsChange"
            :items="OS_OPTIONS"
            item-title="title"
            item-value="value"
            label="Operating System"
            :value="os"
          />
          <v-select
            v-model="graphics"
            :disabled="os !== 'win'"
            :items="GRAPHICS_OPTIONS"
            item-title="title"
            item-value="value"
            label="Graphics API (Windows Only)"
          />
          <v-select
            v-model="platform"
            :disabled="platformSelectDisabled"
            :items="PLATFORM_OPTIONS"
            item-title="title"
            item-value="value"
            label="Platform"
          />
          <v-select
            v-model="architecture"
            :disabled="architectureSelectDisabled"
            :items="ARCHITECTURE_OPTIONS"
            item-title="title"
            item-value="value"
            label="System Architecture"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="isActive.value = false"> Cancel </v-btn>
          <v-btn
            @click="onDownloadButtonClick"
            color="#9b59c8"
            :disabled="downloadButtonDisabled"
            :href="`https://dustkid.com/getdustmod/${os}${architecture}${graphics ?? ''}_${platform}`"
            rel="noopener noreferrer"
            target="_blank"
            text
          >
            Download
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-dialog
        @update:model-value="onWarningDialogModelValueChange"
        v-model="showWarningDialog"
        width="500"
      >
        <v-card>
          <v-card-title> Warning! </v-card-title>
          <v-card-text class="align-center d-flex flex-column ga-4">
            <v-icon color="red" size="75">mdi-alert</v-icon>
            <p>
              You are about to walk into a very common pitfall when downloading
              Dustmod!
            </p>
            <p>
              Please make sure the architecture you have selected matches your
              <b>Steam installation</b>! This is very likely 32-bit even if your
              machine is 64-bit.
            </p>
            <p>
              Only proceed with this download if you are absolutely certain that
              you have a 64-bit installation of Steam.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="onGoBack">Go Back</v-btn>
            <v-btn
              color="red"
              :href="`https://dustkid.com/getdustmod/${os}${architecture}${graphics ?? ''}_${platform}`"
              >Download Anyway</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface SelectOption {
  title: string;
  value: string;
}

const ARCHITECTURE_OPTIONS: SelectOption[] = [
  {
    title: "32-Bit",
    value: "32",
  },
  {
    title: "64-Bit",
    value: "64",
  },
];

const GRAPHICS_OPTIONS: SelectOption[] = [
  {
    title: "DirectX 12",
    value: "dx12",
  },
  {
    title: "DirectX 9",
    value: "",
  },
  {
    title: "SDL2",
    value: "sdl2",
  },
];

const OS_OPTIONS: SelectOption[] = [
  {
    title: "Windows",
    value: "win",
  },
  {
    title: "Mac OS X",
    value: "osx",
  },
  {
    title: "Linux",
    value: "linux",
  },
];

const PLATFORM_OPTIONS: SelectOption[] = [
  {
    title: "Steam",
    value: "steam",
  },
  {
    title: "DRM Free",
    value: "drmfree",
  },
];

const architecture = ref<string | null>(null);
const graphics = ref<string | null>(null);
const os = ref<string | null>(null);
const platform = ref<string | null>(null);

const showWarningDialog = ref(false);

const architectureSelectDisabled = computed(() => {
  if (os.value !== "win") {
    return true;
  }

  return platform.value === null;
});

const downloadButtonDisabled = computed(() => {
  return (
    os.value === null ||
    (os.value === "win" && graphics.value === null) ||
    platform.value === null ||
    architecture.value === null
  );
});

function handleOsChange(event: string) {
  architecture.value = ["linux", "osx"].includes(event) ? "64" : null;

  graphics.value = null;
  platform.value = null;
  os.value = event;
}

function onDownloadButtonClick(event: MouseEvent) {
  if (os.value === "win" && architecture.value === "64" && platform.value === "steam") {
    event.preventDefault();
    showWarningDialog.value = true;
  }
}

function onGoBack() {
  showWarningDialog.value = false;
  architecture.value = null;
}

function onWarningDialogModelValueChange(updatedModelValue: boolean) {
  if (!updatedModelValue) {
    onGoBack();
  }
}

const platformSelectDisabled = computed(() => {
  if (os.value === null) {
    return true;
  }

  return os.value === "win" ? graphics.value === null : false;
});
</script>
