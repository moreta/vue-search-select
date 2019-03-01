<template>
    <div>
        <model-select :options="options"
                      placeholder="select item"
                      v-model="item">
            <template slot="option" slot-scope="option"> 
                {{ option.value.text }} <span style="color:blue">HAVE VALUE: {{ option.value.value }} </span> 
            </template>
        </model-select>
    </div>
</template>

<script>
  import { ModelSelect } from '../../lib'

  export default {
    data () {
      return {
        item: { value: '', text: '' },
        options: [
          { value: '1', text: 'element 1' },
          { value: '2', text: 'element 2' },
          { value: '3', text: 'element 3' }
        ]
      }
    },
    components: {
      ModelSelect
    }
  }
</script>
