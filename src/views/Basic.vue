<template>
  <div>
    <basic-example />
    <error-prop-example />
    <disabled-prop-example />
    <custom-attr-example />
    <name-and-id-prop-example />
  </div>
</template>

<script>
import BasicExample from '../components/Basic/_Basic'
import CustomAttrExample from '../components/Basic/_CustomAttr'
import ErrorPropExample from '../components/Basic/_ErrorProp'
import DisabledPropExample from '../components/Basic/_DisabledProp'
import NameAndIdPropExample from '../components/Basic/_NameAndIdProp'

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
