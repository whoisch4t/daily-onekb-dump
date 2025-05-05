<template>
  <div id="dump-form">
    <div class="byte-counter">
      {{ byteSize }} / 1024 bytes
    </div>
    <h2>🧠 Leave your 1KB Dump</h2>
    <textarea
      v-model="text"
      @input="checkLimit"
      placeholder="Start typing..."
    />
    <button
      @click="submitDump"
      :disabled="byteSize > 1024 || byteSize === 0"
    >
      Submit
    </button>
    <p v-if="status">{{ status }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const byteSize = ref(0)
const status = ref('')

function checkLimit() {
  byteSize.value = new TextEncoder().encode(text.value).length
}

async function submitDump() {
  const res = await fetch('http://localhost:3001/api/dump', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: text.value,
  })

  if (res.ok) {
    status.value = '✅ Dump saved!'
  } else {
    const msg = await res.text()
    status.value = `❌ ${msg}`
  }
}
</script>

<style scoped>
#dump-form {
  position: relative;
  background-color: #fff176;
  border: 4px solid #fbc02d;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 4px 4px 0 #c8a415;
}

textarea {
  width: 100%;
  height: 200px;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  background-color: #fffde7;
  border: 2px dashed #fbc02d;
  padding: 1rem;
  box-sizing: border-box;
  color: #333;
  outline: none;
  resize: none;
}

button {
  margin-top: 1rem;
  background-color: #ff4081;
  color: white;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 2px 2px 0 #b71c1c;
  transition: transform 0.1s ease;
}

button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  box-shadow: none;
}

button:hover:not(:disabled) {
  transform: scale(1.05);
  background-color: #f50057;
}

.byte-counter {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #212121;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
</style>
