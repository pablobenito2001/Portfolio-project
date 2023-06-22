<template>
    <div class="Error">
        <span>{{ props.message }}</span>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        message: string;
    }

    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .Error{
        font-size: 2vw;
        font-family: var(--secundary);
    }
</style>