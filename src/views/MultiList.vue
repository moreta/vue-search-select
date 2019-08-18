<template>
  <div>
    <h3>Basic</h3>
    <basic-example />

    <h3>isError Prop</h3>
    <error-prop-example />

    <h3>isDisabled Prop</h3>
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
