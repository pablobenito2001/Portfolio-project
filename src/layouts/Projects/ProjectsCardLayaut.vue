<template>
    <div class="ProjectLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>
    
</script>
<style lang='scss' scoped>
    .ProjectLayout{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: var(--padding);
        margin: var(--padding) 0 0 0;
    }
</style>