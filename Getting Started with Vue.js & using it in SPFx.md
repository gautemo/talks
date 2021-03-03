# Getting Started with Vue.js & using it in SPFx
Format: Presentation 👨‍🏫

### January 2019 - meetup, Sopra Steria
[Repo](https://github.com/gautemo/links-webpart-vue-spfx)

## Description
Vue.js is a great web development framework, I will show you how to master Vue.js. After you have gotten to know Vue, I will show you how to use it in your SharePoint site with SharePoint Framework (SPFx). We will build a webpart retrieving links from a SharePoint list and showing them in a Vue component with realtime search.

## Private notes 🤫
<details>
  <summary>Expand</summary>
https://vuejs.org/v2/guide/

V-model  
V-on:click  
       time: function(){  
           this.message = new Date().toLocaleTimeString();  
       }  

V-if  
V-else  
V-for  
emojis: ['🤠', '🤯', '☠', '👻', '👺', '💣', '🧚', '🧡', '🐖', '🐗', '🦅', '🍟']  
v-bind:class=”{big: e === '🍟'}”  


PnP SPFx: https://github.com/pnp/generator-spfx/ 

`npm install -g @pnp/generator-spfx`

`yo @pnp/spfx`

Vue file: 
```html
<template>
   <div>
     {{description}}
   </div>
</template>

<script>
export default {
 data(){
   return {
   }
 },
 props: {
   description: String
 }
}
</script>

<style scoped>
div{
 font-size: 5em;
}
</style>
```

import { SPHttpClient } from '@microsoft/sp-http'; 

Med en gang

has a dependency on "@microsoft/sp-http" that is not declared in the manifest.
It works fine after a clean build and new deployment.
gulp clean && gulp bundle && gulp package-solution

https://github.com/gautemo/links-webpart-vue-spfx
</details>