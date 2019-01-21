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
    
    <!--Boolean type model -->
    <h3>Boolean type value</h3>
    <boolean-type-example />
    
    <!-- isError prop -->
    <h3>isError prop</h3>
    <error-prop-example />
    
    <!-- isDisabled prop -->
    <h3>isDisabled prop</h3>
    <disabled-prop-example />
    
    <!-- bind value and on input -->
    <h3>Handling Event sample</h3>
    <customizing-event-example />
    
    <!-- bind value and on input -->
    <h3>name & id attribute</h3>
    <name-and-id-prop-example />
  
  </div>
</template>

<script>
import ObjectTypeExample from './_ObjectType'
import StringTypeExample from './_StringType'
import NumberTypeExample from './_NumberType'
import BooleanTypeExample from './_BooleanType'
import ErrorPropExample from './_ErrorProp'
import DisabledPropExample from './_DisabledProp'
import CustomizingEventExample from './_CustomizingEvent'
import NameAndIdPropExample from './_NameAndIdProp'
import { ModelSelect } from '../../lib'

export default {
  components: {
    ModelSelect,
    ObjectTypeExample,
    StringTypeExample,
    NumberTypeExample,
    BooleanTypeExample,
    ErrorPropExample,
    DisabledPropExample,
    CustomizingEventExample,
    NameAndIdPropExample
  }
}
</script>
