<template lang="pug">
span
    button(v-bind="$attrs", class="_btn")
        slot Submit
    p {{$attrs}}
</template>

<script>
</script>

<style lang="scss">
.xl {
    padding: 10px 20px;
}
</style>