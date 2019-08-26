<template>
  <div>
    <basic-example />
    <error-prop-example />
    <disabled-prop-example />
  </div>
</template>

<script>
import BasicExample from '../components/MultiList/_Basic'
import ErrorPropExample from '../components/MultiList/_ErrorProp'
import DisabledPropExample from '../components/MultiList/_DisabledProp'

export default {
  components: {
    BasicExample,
    ErrorPropExample,
    DisabledPropExample
  }
}
</script>
