<template>
  <div>
    <Html>
      <Head>
        <Title>Base64 Encode / Decode</Title>
      </Head>
    </Html>

    <AppsHead appKey="base64" />

    <hr />

    <AppsContainer>
      <div class="text-left">
        <select
          v-model="mode"
          @change="resetInputOutput"
          class="mb-4 py-2 px-6 rounded-lg border-2 focus:outline-none focus:border-emerald-300 bg-gray-100 hover:bg-white duration-300 text-gray-900"
        >
          <option value="decode">Decode</option>
          <option value="encode">Encode</option>
        </select>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div class="flex flex-col">
          <label class="mb-1 text-white" for="string-input"
            >base64 string to {{ mode }}</label
          >
          <textarea
            v-model="input"
            :placeholder="'enter the string to ' + mode"
            @input="handleModeChange"
            class="text-gray-900 border-2 rounded-md hover:border-green-300 focus:border-green-300 focus:outline-none h-96 p-4 bg-gray-50"
          ></textarea>
        </div>
        <div class="flex flex-col">
          <label class="mb-1 text-white" for="output">output:</label>
          <textarea
            :value="output"
            placeholder="output..."
            readonly
            class="text-gray-900 border-2 rounded-md hover:border-green-300 focus:border-green-300 focus:outline-none h-96 p-4 bg-gray-50"
          >
          </textarea>
        </div>
      </div>
    </AppsContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      output: "",
      mode: "decode",
    };
  },

  methods: {
    handleModeChange() {
      if (this.mode === "decode") {
        this.decodeBase64();
      } else if (this.mode === "encode") {
        this.encodeBase64();
      }
    },
    resetInputOutput() {
      this.input = "";
      this.output = "";
    },
    decodeBase64() {
      try {
        this.output = atob(this.input);
      } catch {
        this.output = "";
      }
    },
    encodeBase64() {
      try {
        this.output = btoa(this.input);
      } catch {
        this.output = "";
      }
    },
  },
};
</script>
