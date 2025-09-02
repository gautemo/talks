# Proposals lifecycle

<Arrow x1="100" y1="400" x2="850" y2="400" />

<p class="translate-x-770px translate-y-318px">juni</p>

<p
  class="proposal"
  v-motion
  :initial="{ x: 800, y: 50, scale: 2 }"
  :click-1="{ x: 50, y: 200, scale: 1 }"
  :click-2="{ x: 175 }"
  :click-3="{ x: 310 }"
  :click-4="{ x: 420 }"
  :click-5="{ x: 510 }"
  :click-6="{ x: 652 }"
>
📜
</p>

<p v-click="1" class="translate-x-40px translate-y-238px">stage 0</p>
<p v-click="2" class="translate-x-180px translate-y-198px">stage 1</p>
<p v-click="3" class="translate-x-315px translate-y-158px">stage 2</p>
<p v-click="4" class="translate-x-425px translate-y-118px">stage 2.7</p>
<p v-click="5" class="translate-x-520px translate-y-78px">stage 3</p>
<p v-click="6" class="translate-x-660px translate-y-38px">stage 4</p>

<ul v-click="[1]" class="translate-y--300px">
  <li>Ide</li>
</ul>

<ul v-click="[2]" class="translate-y--331px">
  <li>Forslag</li>
  <li>Eksempler</li>
  <li>Champion</li>
</ul>

<ul v-click="[3]" class="translate-y--425px">
  <li>Utkast</li>
  <li>Syntax</li>
  <li>Implementasjonsdetaljer</li>
</ul>

<ul v-click="[4]" class="translate-y--520px">
  <li>Godkjent i prinsippet</li>
  <li>Under validering</li>
</ul>

<ul v-click="[5]" class="translate-y--582px">
  <li>Kandidat</li>
  <li>Venter på nettlesere/JavaScript engines</li>
</ul>

<ul v-click="[6]" class="translate-y--645px">
  <li>To implementasjoner</li>
  <li>Offisielt</li>
</ul>

<style>
.proposal {
  font-size: 3rem;
}
</style>

---