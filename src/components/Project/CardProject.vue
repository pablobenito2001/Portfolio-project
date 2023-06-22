<template>
    <div class="ProjectCard">
        <img 
        :src="props.sourceImage" 
        :alt="`${ props.name }' mockup'`"
        class="ProjectCard-image">
        <div>
            <h3 class="ProjectCard-text ProjectCard-name">{{ props.name }}-{{ props.type }}</h3>
            <span class="ProjectCard-text ProjectCard-tecnologies">✦ {{ props.tecnologies.join(' | ') }}</span>
        </div>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        sourceImage: string;
        name: string;
        type: string;
        tecnologies: string[];
    }

    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .ProjectCard{
        &-image{
            width: 100%;
            border-radius: 6%;
            margin: 0 0 var(--padding) 0;
        }
        &-name{
            font-size: clamp(2em, 5vw ,5vw);
            margin-bottom: 1vw;
            letter-spacing: -10%;
        }
        &-tecnologies{
            font-size: clamp(.7em, 1.5vw,1.5vw);
            font-family: var(--secundary);
        }
        &-text{
            line-height: 100%;
        }
    }
</style>