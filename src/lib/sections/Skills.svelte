<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import { skills } from "$lib/data/profile";
</script>

<SectionTitle
  eyebrow="Toolkit"
  title="Skillek"
  subtitle="Fókusz a leggyakrabban használt technológiákon és eszközökön."
/>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {#each skills as group (group.title)}
    <section class="rounded-2xl border p-6">
      <h3 class="text-base font-semibold tracking-tight">{group.title}</h3>
      <div class="mt-4 flex flex-wrap gap-2">
        {#each group.items as it}
          <span class="text-xs px-2.5 py-1 rounded-full border opacity-80">{it}</span>
        {/each}
      </div>
    </section>
  {/each}
</div>

<!-- extra “nice” blokk -->
<div class="mt-8 rounded-2xl border p-6">
  <p class="text-sm font-medium opacity-70">What I care about</p>
  <div class="mt-3 grid gap-3 sm:grid-cols-3">
    <div class="rounded-2xl border p-4">
      <p class="text-sm font-medium">Clean architecture</p>
      <p class="mt-1 text-sm opacity-80">Átlátható rétegek, könnyű bővíthetőség.</p>
    </div>
    <div class="rounded-2xl border p-4">
      <p class="text-sm font-medium">Reliability</p>
      <p class="mt-1 text-sm opacity-80">Stabil hibakezelés, validáció, tesztelhetőség.</p>
    </div>
    <div class="rounded-2xl border p-4">
      <p class="text-sm font-medium">Developer experience</p>
      <p class="mt-1 text-sm opacity-80">Jó tooling, automatizálás, konzisztens stílus.</p>
    </div>
  </div>
</div>
