<template>
<div>
  <h1>kappa12</h1>
  <Core/>
</div>
</template>

<script>
export default {
  components: {
    Core: () => import('core/App')
  }
}
</script>