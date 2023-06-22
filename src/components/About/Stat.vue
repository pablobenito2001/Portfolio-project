<template>
    <div class="Stat">
        <span class="Stat-text">{{ props.stat }}</span>
        <span class="Stat-text">{{ props.nameStat }}</span>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        nameStat: string;
        stat: number;
    }

    const props = defineProps<Props>()
</script>
<style lang='scss' scoped>
    .Stat{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .625rem;
        border-bottom: solid 1px var(--color-grey);
        border-top: solid 1px var(--color-grey);
        width: 100%;
        padding: .625rem .9375rem;
        &-text{
            font-family: var(--secundary);
            font-size: 1em;
            color: var(--color-grey);
        }
    }
</style>