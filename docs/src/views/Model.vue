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
import ObjectTypeExample from "../components/Model/_ObjectType.vue"
import StringTypeExample from "../components/Model/_StringType.vue"
import NumberTypeExample from "../components/Model/_NumberType.vue"
import BooleanTypeExample from "../components/Model/_BooleanType.vue"
import ErrorPropExample from "../components/Model/_ErrorProp.vue"
import DisabledPropExample from "../components/Model/_DisabledProp.vue"
import CustomizingEventExample from "../components/Model/_CustomizingEvent.vue"
import NameAndIdPropExample from "../components/Model/_NameAndIdProp.vue"

export default {
  components: {
    ObjectTypeExample,
    StringTypeExample,
    NumberTypeExample,
    BooleanTypeExample,
    ErrorPropExample,
    DisabledPropExample,
    CustomizingEventExample,
    NameAndIdPropExample,
  },
}
</script>
