<template lang="pug">
span
    button(v-bind="$attrs", class="_btn")
        slot Submit
    p {{$attrs}} aaaadddddaaaxxxxxxxx
</template>

<script>
</script>

<style lang="scss">
_btn {
    .xl {
        padding: 10px 20px;
    }
}
</style>
