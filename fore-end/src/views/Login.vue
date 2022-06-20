<template>

<Form></Form>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Form from '../components/login/Form.vue'

export default defineComponent({
  name: 'Login',
  components: {
    Form
  },
  setup() {

    return {

    }
  }
});
</script>