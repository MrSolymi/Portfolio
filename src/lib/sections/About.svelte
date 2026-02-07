<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte";

  const quick = [
    { title: "Backend & API", text: "Spring Boot alapú REST API-k, validáció, hibakezelés, tiszta endpoint struktúra." },
    { title: "Full-stack szemlélet", text: "Svelte front integráció, auth flow-ok, UX szempontok backend oldalról is." },
    { title: "DevOps alapok", text: "Docker / Compose, lokális és prod környezetek, egyszerű deploy workflow." }
  ];

  const bullets = [
    "Backend fókusz Java / Spring Boot-tal",
    "Szeretek átlátható architektúrát és konzisztens kódot",
    "Projektekben erős: auth, adatkezelés, integrációk"
  ];
</script>

<SectionTitle
  eyebrow="About"
  title="Rólam"
  subtitle="Rövid összefoglaló arról, miben vagyok erős és hogyan dolgozom."
/>

<div class="grid gap-8 lg:grid-cols-2 items-start">
  <!-- Left card -->
  <div class="rounded-2xl border p-6">
    <p class="text-sm opacity-80">
      Programtervező informatikusként főleg <span class="font-medium">Spring Boot backend</span>-del dolgozom,
      és szeretem a letisztult, jól karbantartható megoldásokat. A projektekben fontos nekem a stabil működés,
      a jó fejlesztői élmény és az átlátható struktúra.
    </p>

    <ul class="mt-5 space-y-2">
      {#each bullets as b}
        <li class="text-sm opacity-85 flex gap-2">
          <span class="mt-2 h-1.5 w-1.5 rounded-full border shrink-0"></span>
          <span>{b}</span>
        </li>
      {/each}
    </ul>

    <div class="mt-6 flex flex-wrap gap-2">
      <span class="text-xs px-2.5 py-1 rounded-full border opacity-80">Open to work</span>
      <span class="text-xs px-2.5 py-1 rounded-full border opacity-80">Backend / Full-stack</span>
      <span class="text-xs px-2.5 py-1 rounded-full border opacity-80">Debrecen / Remote</span>
    </div>
  </div>

  <!-- Right cards -->
  <div class="grid gap-4">
    {#each quick as q (q.title)}
      <div class="rounded-2xl border p-6">
        <p class="text-sm font-medium">{q.title}</p>
        <p class="mt-2 text-sm opacity-80">{q.text}</p>
      </div>
    {/each}

    <div class="rounded-2xl border p-6">
      <p class="text-sm font-medium">Currently</p>
      <p class="mt-2 text-sm opacity-80">
        Jelenleg nyitott vagyok backend / full-stack lehetőségekre, ahol Spring Boot-tal és modern stackkel
        tudok építeni, javítani és stabil rendszereket szállítani.
      </p>
    </div>
  </div>
</div>
