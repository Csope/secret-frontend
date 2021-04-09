<template>
  <div class="container homeWrapper">  
    <div>
      <div class="input-group input-group-lg">
        <input type="text" class="form-control" placeholder='Hash' v-model="hashText" aria-label="" aria-describedby="inputGroup-sizing-lg">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2" @click="showSecret">GET SECRET</button>
        </div>
      </div>
      <div class="invalid-feedback" style='display:block' v-if='msg.length > 0'>
        {{ msg }}
      </div>
    </div>
    <Secret v-if='showResponse' v-bind:response="response" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { apiUrl } from '@/constants/constants.js';

export default Vue.extend({
  data() {
    return {
      hashText: '',
      response: '',
      showResponse: false,
      msg: ''
    }
  },
  methods: {
    async showSecret() {
        this.msg = '';
        if(this.hashText.length < 1){ 
          this.msg = ' * Hash is required'
          return false
        }
        this.response = await fetch(
          apiUrl + '/' + this.hashText
        ).then(res => res.json())
        if(this.response) {
          this.showResponse = true
        }
    }
  }
})
</script>


