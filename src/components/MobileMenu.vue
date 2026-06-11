<script setup lang="ts">
import { ref } from 'vue';

interface NavItem {
  label: string;
  href: string;
}

defineProps<{ items: NavItem[] }>();

const open = ref(false);
</script>

<template>
  <div class="md:hidden">
    <button
      type="button"
      class="grid size-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
      :aria-label="open ? 'Close menu' : 'Open menu'"
      :aria-expanded="open"
      @click="open = !open"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <path v-if="open" d="M6 6l12 12M18 6L6 18" />
        <path v-else d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    </button>
    <nav
      v-if="open"
      class="absolute inset-x-0 top-full border-b border-line bg-bg px-6 pt-2 pb-6 shadow-lg"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="item in items" :key="item.href">
          <a
            class="block rounded-md px-3 py-2 font-mono text-sm text-muted transition-colors hover:bg-surface hover:text-accent"
            :href="item.href"
            @click="open = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
