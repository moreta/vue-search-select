<template>
  <div>
    <h3>Object type model</h3>
    <object-type-example />
    
    <!--String type model -->
    <h3>String type model</h3>
    <string-type-example />
    
    <!--Number type model -->
    <h3>Number type model</h3>
    <number-type-example />
    
    <!-- isError prop -->
    <h3>isError prop</h3>
    <error-prop-example />
    
    <!-- isDisabled prop -->
    <h3>isDisabled prop</h3>
    <disabled-prop-example />
  
  </div>
</template>

<script>
  import ObjectTypeExample from './_ObjectType'
  import StringTypeExample from './_StringType'
  import NumberTypeExample from './_NumberType'
  import ErrorPropExample from './_ErrorProp'
  import DisabledPropExample from './_DisabledProp'
  import { ModelSelect } from '../../lib'
  
  export default {
    components: {
      ModelSelect,
      ObjectTypeExample,
      StringTypeExample,
      NumberTypeExample,
      ErrorPropExample,
      DisabledPropExample
    }
  }
</script>
