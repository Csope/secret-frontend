<template>
     <div class="container storeWrapper">
    <div>
        <form
        id="app"
        @submit="submitForm"
        action="https://secret2021.herokuapp.com/v1/secret"
        method="post"
        >
         <div class="form-group input-group-lg">
            <label for="secret">Secret</label>
            <input type="input" class="form-control" id="secret" v-model="form.secret" name="secret">
        </div>
        <div class="form-group input-group-lg">
            <label for="secret">Expire after views</label>
            <input type="number" min='1' class="form-control" id="expire_after_views" v-model="form.expire_after_views" name="expire_after_views">
        </div>
        <div class="form-group input-group-lg">
            <label for="secret">Expire after date</label>
            <input type="datetime-local" class="form-control" id="expire_after_views" v-model="form.expire_after" name="expire_after">
            <small id="expire_after_help" class="form-text text-muted">Leave empty if you don't need expiration date</small>
        </div>
        <button type="submit" class="btn btn-lg btn-primary">Store</button>
        </form>
        <Secret v-if='showResponse' v-bind:response="response" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Axios , {AxiosResponse, AxiosError} from 'axios';
import { apiUrl, optionAxios } from '@/constants/constants.js';

export default Vue.extend({
    data() { 
        return {
            errors: String,
            form: {
                secret: '',
                expire_after_views: '',
                expire_after: ''
            },
            response: String,
            showErrors: false,
            showResponse: false
            
        }
    },

    methods: {
        
        submitForm: function(e): void {
            
            e.preventDefault();
           
            this.showErrors = false;
            this.showResponse = false;

            var bodyFormData = new FormData();
            bodyFormData.append('secret', this.form.secret);
            bodyFormData.append('expire_after_views', this.form.expire_after_views);
            bodyFormData.append('expire_after', this.form.expire_after);

            Axios.post(apiUrl, 
            bodyFormData , 
            optionAxios)
            .then((response) => {
                this.response = response.data;
                this.showResponse = true;
            })
            .catch( (error) => {
                this.response = error.response.data.errors;
                this.showResponse = true;
            });
    
        }
    }

})
</script>

