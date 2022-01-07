<template>
  <div>
    <Html>
      <Head>
        <Title>My IP | lame</Title>
      </Head>
    </Html>

    <AppsHead appKey="myip" />

    <hr />

    <AppsContainer>
      <h3 class="text-xl font-bold mb-2">Your Current IP Information:</h3>
      <div
        class="bg-white p-6 rounded-lg text-black text-left max-w-xl mx-auto overflow-x-auto"
      >
        <pre><code v-if="pending">fetching...</code><code v-else>{{ JSON.stringify(data, null, 4) }}</code></pre>
      </div>
    </AppsContainer>
  </div>
</template>

<script setup>
const { data, pending } = useFetch(
  "https://my-ip.theboringdude.workers.dev/0",
  { method: "GET", parseResponse: JSON.parse }
);
</script>
