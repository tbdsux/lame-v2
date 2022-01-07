<template>
  <div class="w-5/6 mx-auto text-center my-12">
    <h4 class="text-3xl font-black tracking-wide text-green-500">
      {{ app.title }}
    </h4>
    <p class="text-lg text-gray-600">{{ app.description }}</p>
  </div>
</template>

<script lang="ts">
import apps from "~/lame.apps.json";

export default {
  props: {
    appKey: String,
  },

  data() {
    return {
      // NOTE: hope there are better solutions than this one
      app: Object.entries(apps).filter(([key, value]) => {
        if (this.appKey === key) {
          return value;
        }
      })[0][1],
    };
  },
};
</script>
