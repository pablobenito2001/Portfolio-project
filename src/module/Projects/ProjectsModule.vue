<template>
    <template v-if="error">
        <Error :message="error.message"/>
    </template>
    <template v-else>
        <ProjectsCardLayout v-if="loading" class="Projects">
            <CardProject 
            v-for="item in data"
            :key="item.id"
            :name="item.name"
            :type="item.type"
            :source-image="item.source_image"
            :tecnologies="item.tecnologies"
            />
        </ProjectsCardLayout>
        <Loader v-else/>
    </template>
</template>
<script lang='ts' setup>
    import Loader from '../../components/Loaders/Loader.vue';
    import Error from '../../components/Loaders/Error.vue'
    import ProjectsCardLayout from '../../layouts/Projects/ProjectsCardLayaut.vue';
    import CardProject from '../../components/Project/CardProject.vue';
    import type { Project } from '../../entities/Projects'; 
    import { useLocalData } from '../../composable/useLocalData';

    const { data, error, loading } = useLocalData<Project[]>('projects');
</script>
<style lang='scss' scoped>

</style>