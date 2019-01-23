<template>
  <div>
    <h3>Basic</h3>
    <basic-example />
    
    <h3>isError prop</h3>
    <error-prop-example />
    
    <h3>isDisabled prop</h3>
    <disabled-prop-example />
    
    <h3>Custom attribute to allow custom css</h3>
    <custom-attr-example />
    
    <!-- bind value and on input -->
    <h3>name & id attribute</h3>
    <name-and-id-prop-example />
  
  </div>
</template>

<script>
import BasicExample from './_Basic'
import CustomAttrExample from './_CustomAttr'
import ErrorPropExample from './_ErrorProp'
import DisabledPropExample from './_DisabledProp'
import NameAndIdPropExample from './_NameAndIdProp'

export default {
  components: {
    BasicExample,
    CustomAttrExample,
    ErrorPropExample,
    DisabledPropExample,
    NameAndIdPropExample
  }
}
</script>
