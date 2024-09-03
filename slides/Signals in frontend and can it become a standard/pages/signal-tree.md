

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">State:</span>
  <kbd>count</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Beregnet state:</span>
  <kbd>doubleCount</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">UI/DOM:</span>
  <kbd>&lt;p&gt;{count}&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Funksjon:</span>
  <kbd>console.log(doubleCount)</kbd>
</div>

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }
</style>

---
transition: fade
---

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">State:</span>
  <kbd>0</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Beregnet state:</span>
  <kbd>0</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">UI/DOM:</span>
  <kbd>&lt;p&gt;0&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Funksjon:</span>
  <kbd>console.log(0)</kbd>
</div>

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }
</style>

---
transition: fade
---

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">State:</span>
  <kbd class="signal">1</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Beregnet state:</span>
  <kbd>0</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">UI/DOM:</span>
  <kbd>&lt;p&gt;0&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Funksjon:</span>
  <kbd>console.log(0)</kbd>
</div>
<arrow x1="400" y1="160" x2="240" y2="230" color="#d6d600" width="2" arrowSize="1" />
<arrow x1="450" y1="160" x2="610" y2="230" color="#d6d600" width="2" arrowSize="1" />

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }

  .signal::after {
    content: 'Jeg er oppdatert';
    background-color: white;
    color: #333;
    padding: 10px;
    position: absolute;
    top: 15px;
    left: 40px;
    border-radius: 0 10px 10px 10px;
  }
</style>

---
transition: fade
---

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">State:</span>
  <kbd>1</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Beregnet state:</span>
  <kbd class="effect">2</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">UI/DOM:</span>
  <kbd class="effect">&lt;p&gt;1&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Funksjon:</span>
  <kbd>console.log(0)</kbd>
</div>
<arrow x2="400" y2="160" x1="240" y1="230" color="#d6d600" width="2" arrowSize="1" />
<arrow x2="450" y2="160" x1="610" y1="230" color="#d6d600" width="2" arrowSize="1" />

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }

  .effect::after {
    content: 'Da henter jeg verdien og gjør mitt';
    background-color: white;
    color: #333;
    padding: 10px;
    position: absolute;
    top: 25px;
    left: 40px;
    border-radius: 0 10px 10px 10px;
    max-width: 250px;
    line-height: 1.4rem;
  }
</style>

---
transition: fade
---

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">State:</span>
  <kbd>1</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Beregnet state:</span>
  <kbd class="signal">2</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">UI/DOM:</span>
  <kbd>&lt;p&gt;1&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Funksjon:</span>
  <kbd>console.log(0)</kbd>
</div>
<arrow x1="160" y1="300" x2="160" y2="380" color="#d6d600" width="2" arrowSize="1" />

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }

  .signal::after {
    content: 'Jeg er oppdatert';
    background-color: white;
    color: #333;
    padding: 10px;
    position: absolute;
    top: 15px;
    left: 30px;
    border-radius: 0 10px 10px 10px;
  }
</style>

---
transition: fade
---

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">State:</span>
  <kbd>1</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Beregnet state:</span>
  <kbd>2</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">UI/DOM:</span>
  <kbd>&lt;p&gt;1&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Funksjon:</span>
  <kbd class="effect">console.log(2)</kbd>
</div>
<arrow x2="160" y2="300" x1="160" y1="380" color="#d6d600" width="2" arrowSize="1" />

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }

  .effect::after {
    content: 'Da henter jeg verdien og gjør mitt';
    background-color: white;
    color: #333;
    padding: 10px;
    position: absolute;
    top: 30px;
    left: 120px;
    border-radius: 0 10px 10px 10px;
    max-width: 250px;
    line-height: 1.4rem;
  }
</style>

---

<p class="translate-x--62 translate-y--40">
Hva er <span v-mark.blue="0" class="normal">signals?</span>
</p>

<div class="translate-x-90 translate-y--30">
  <span class="absolute translate-y--8">Signal:</span>
  <kbd>count</kbd>
</div>
<div class="translate-x-20">
  <span class="absolute translate-y--8">Signal:</span>
  <kbd>doubleCount</kbd>
</div>
<div class="translate-x-140 translate-y--8">
  <span class="absolute translate-y--8">Effekt:</span>
  <kbd>&lt;p&gt;{count}&lt;/p&gt;</kbd>
</div>
<div class="translate-x-20 translate-y-25">
  <span class="absolute translate-y--8">Effekt:</span>
  <kbd>console.log(doubleCount)</kbd>
</div>

<arrow x1="400" y1="160" x2="240" y2="230" color="#d6d600" width="2" arrowSize="1" />
<arrow x1="450" y1="160" x2="610" y2="230" color="#d6d600" width="2" arrowSize="1" />
<arrow x1="160" y1="300" x2="160" y2="380" color="#d6d600" width="2" arrowSize="1" />

<style>
  kbd {
    font-size: 1.5rem;
  }

  span:not(.normal) {
    color: #d6d600;
  }

  p {
    opacity: 1 !important;
    text-align: center;
    margin-top: 10rem !important;
    font-size: 2rem;
  }
</style>