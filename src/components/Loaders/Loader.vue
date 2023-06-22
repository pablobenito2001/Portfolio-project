<template>
    <div class="Loader">
        <div class="Loader-loader"></div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    @keyframes loading {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }

    .Loader{
        min-height: 80vh;
        width: 100%;
        &-loader{
            width: 9.375rem;
            height: 9.375rem;
            border-bottom: solid 3px var(--grey);
            border-top: solid 3px var(--grey);
            border-radius: 100%;
            animation: loading 1s infinite alternate;
        }   
    }
</style>