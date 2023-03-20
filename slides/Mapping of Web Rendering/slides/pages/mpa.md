---
layout: center
---

# MPA - Multiple Page Application
<br/>
<p>
Tenk:
<ph-file-html-thin class="text-5xl"/>
<ph-file-html-thin class="text-5xl"/>
<ph-file-html-thin class="text-5xl"/>
</p>

<style scoped>
  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>

---
transition: none
---
<DemoRender :steps="[]" :working="false">
<Screen :empty="false" :items="['melk']" :nav="true">

</Screen>
</DemoRender>

---
transition: ssr
---
<DemoRender :steps="['GET']" :working="false">
<Screen :empty="false" :items="['melk']" :nav="true">

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'oppskrifter.html']" :working="false">
<Screen :empty="false" :items="['melk']" :nav="true" :route="1">

</Screen>
</DemoRender>

---
transition: ssr
---
<DemoRender :steps="['GET', 'oppskrifter.html', 'GET']" :working="false">
<Screen :empty="false" :items="['melk']" :nav="true" :route="1">

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET', 'oppskrifter.html', 'GET', 'handle.html']" :working="false">
<Screen :empty="false" :items="['melk']" :nav="true">

</Screen>
</DemoRender>

---

## Ulempe
- Hver navigasjon må laste nytt innhold