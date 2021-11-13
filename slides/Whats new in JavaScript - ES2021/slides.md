---
theme: default
class: 'text-center'
highlighter: shiki
info: |
  ## What's new in JavaScript - ES2021
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
routerMode: hash  
fonts:
  # basically the text
  sans: 'Baloo Chettan'
  # use with `font-serif` css class from windicss
  serif: 'Baloo Chettan'
---

<Heart/>

# What's new in JavaScript
## ES2021



<style>
  h1,h2{
    transform: rotate(-5deg);
    background: linear-gradient(60deg,#16c570,#2091b1 37%,#2267a3 65%,#3d3393);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }

  h2{
    font-size: 3rem;
  }
</style>

---

<div class="row">
  <img src="/gaute.jpg">
  <div class="column">
    <h1>Gaute Meek Olsen</h1>
    <Capra/>
  </div>
</div>

<style>
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5rem;
}

.column{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img{
  height: 320px;
  border-radius: 40px;
}

h1{
  font-size: 3rem;
}
</style>

---
clicks: 14
---

<p class="top">JavaScript created 1995</p>
<p v-click="1" class="top">Standarized by ECMAScript</p>

<table v-click="1">
  <thead>
    <tr>
      <th>Year</th>
      <th>Edition</th>
      <th v-click="3">Community Name</th>
      <th v-click="7">Official Name</th>
    </tr>
  </thead>
  <tbody class="body">
    <tr>
      <td>1997</td>
      <td>1</td>
    </tr>
    <tr v-click="2">
      <td>1998</td>
      <td>2</td>
    </tr>
    <tr v-click="3">
      <td>1999</td>
      <td>3</td>
      <td>ES3</td>
    </tr>
    <tr v-click="4">
      <td>Abandond</td>
      <td>4</td>
      <td>ES4</td>
    </tr>
    <tr v-click="5">
      <td>2009</td>
      <td>5</td>
      <td>ES5</td>
    </tr>
    <tr v-click="6">
      <td>2011</td>
      <td>5.1</td>
    </tr>
    <tr v-click="7">
      <td>2015</td>
      <td>6</td>
      <td>ES6</td>
      <td>ES2015</td>
    </tr>
    <tr v-click="8">
      <td>2016</td>
      <td>7</td>
      <td>ES7</td>
      <td>ES2016</td>
    </tr>
    <tr v-click="9">
      <td>2017</td>
      <td>8</td>
      <td>ES8</td>
      <td>ES2017</td>
    </tr>
    <tr v-click="10">
      <td>2018</td>
      <td>9</td>
      <td>ES9</td>
      <td>ES2018</td>
    </tr>
    <tr v-click="11">
      <td>2019</td>
      <td>10</td>
      <td>ES10</td>
      <td>ES2019</td>
    </tr>
    <tr v-click="12">
      <td>2020</td>
      <td>11</td>
      <td>ES11</td>
      <td>ES2020</td>
    </tr>
    <tr v-click="13">
      <td>2021</td>
      <td>12</td>
      <td>ES12</td>
      <td>ES2021</td>
    </tr>
    <tr v-click="14">
      <td>Future</td>
      <td></td>
      <td></td>
      <td>ESNext</td>
    </tr>
  </tbody>
</table>

<style>
.top{
  margin: 5px 0;
}

table{
  font-size: 1em;
}

.body td{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

thead tr{
  --tw-border-opacity: 0.8;
}

tbody .slidev-vclick-hidden{
  display: none;
}

tbody .slidev-vclick-current{
  font-size: 1.5em;
}
</style>

---

### Numeric separators

<Code :snippetId="0"/>