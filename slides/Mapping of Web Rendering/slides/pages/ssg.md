---
layout: center
---

# SSG - Static Site Generation
<br/>
<p>
Tenk:
<logos-gatsby class="text-5xl"/>
<logos-docusaurus class="text-5xl"/>
<logos-nextjs-icon class="text-5xl"/>
</p>

<style scoped>
  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>

---

```
npm run build
```

---

<GearWork :size="100" />

---
transition: none
---

<DemoRender :steps="[]" :working="false">
<Screen :empty="true">

```html
```

</Screen>
</DemoRender>

---
transition: none
---
<DemoRender :steps="['GET']" :working="false">
<Screen :empty="true">

```html
```

</Screen>
</DemoRender>

---

<DemoRender :steps="['GET', 'html']" :working="false">
<Screen :empty="false" :items="[]">

```html
<h1>Min handleliste</h1>
<form>
  <label for="add">Legg til</label>
  <input type="text" id="add">
  <button>Lagre</button>
</form>
<ul>
</ul>
```

</Screen>
</DemoRender>

---

## Ulempe
- All data må være tilgjengelig når det bygges