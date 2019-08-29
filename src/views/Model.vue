<template>
  <div>
    <object-type-example />
    <string-type-example />
    <number-type-example />
    <boolean-type-example />
    <error-prop-example />
    <disabled-prop-example />
    <customizing-event-example />
    <name-and-id-prop-example />
  </div>
</template>

<script>
import ObjectTypeExample from '../components/Model/_ObjectType'
import StringTypeExample from '../components/Model/_StringType'
import NumberTypeExample from '../components/Model/_NumberType'
import BooleanTypeExample from '../components/Model/_BooleanType'
import ErrorPropExample from '../components/Model/_ErrorProp'
import DisabledPropExample from '../components/Model/_DisabledProp'
import CustomizingEventExample from '../components/Model/_CustomizingEvent'
import NameAndIdPropExample from '../components/Model/_NameAndIdProp'

export default {
  components: {
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
