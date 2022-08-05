---
theme: seriph
background: bg.png
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  ## Frontend testing workshop
  
  By Gaute Meek Olsen
drawings:
  persist: false
---

# Frontend testing

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/GauteMeekOlsen" target="_blank" alt="Twitter"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-twitter />
  </a>
</div>

---

# Hvorfor teste?

<ul>
  <li v-click="1">Alle utviklere lager 🐞</li>
  <li v-click="2">
    Fange 🐜 tidlig
    <img alt="Boehm's law" src="/law.png"/>
  </li>
  <li v-click="3">
    Spare 🕐 og 💸 i det lange løp (hvis gjort riktig)
    <img alt="Boehm's law" src="/law.png"/>
  </li>
  <li v-click="4">🐛 koster deg brukere, omdømme og penger</li>
  <li v-click="5">Bedre kvalitet på applikasjonen</li>
</ul>


<style>
  .slidev-vclick-prior {
    opacity: 0;
    height: 0;
  }
</style>

---

# Hvordan teste?

<ul>
  <li v-click="1">Behandle testene som en del av kodebasen din</li>
  <li v-click="2">Inkluder det i estimatene dinen</li>
  <li v-click="3">Kjør i din CI/CD pipeline</li>
  <li v-click="4">TDD vs når du føler for det</li>
  <li v-click="5">snapshot, unit tester, integrasjon, e2e, komponent tester</li>
  <li v-click="6">Arrange, Act and Assert og Given When Then</li>
  <li v-click="7">Ikke tenk på testdekning</li>
</ul>


<style>
  .slidev-vclick-prior {
    opacity: 0;
    height: 0;
  }
</style>

---

# Jeg anbefaler

| Business logic        | Things that render           | 
| ------------- |:-------------:| 
| <logos-vitest class="text-5xl"/>      | <logos-cypress class="text-5xl"/> (<logos-playwright class="text-3xl"/>) | 

[https://twitter.com/CaptainCodeman/status/1540867353692348417](https://twitter.com/CaptainCodeman/status/1540867353692348417)

---
layout: center
---

## 🦋🐛🐜🐝🪲🐞🦗🪳🕷️🦟🪰
[https://github.com/gautemo/workshop-frontend-testing](https://github.com/gautemo/workshop-frontend-testing)
## 🪰🦟🕷️🪳🦗🐞🪲🐝🐜🐛🦋