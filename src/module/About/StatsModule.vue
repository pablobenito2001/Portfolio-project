<template>
    <div v-if="followersLoader && reposLoader">
        <Stat name-stat="followers on GitHub" :stat="followersData.followers"/>
        <Stat name-stat="total projects" :stat="totalProjects"/>
        <Stat name-stat="stars on GitHub" :stat="totalStars"/>
    </div>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';

    import Stat from '../../components/About/Stat.vue';
    import { useGitHubData } from '../../composable/useGitHubData';

    type GitHubResponse = {
        stargazers_count: number;
        language: string;
        name: string;
        followers: number;
        avatar_url: string;                                     
    }

    // followers
    type followers = Omit<GitHubResponse, 'stargazers_count' | 'name' | 'language'>;

    const { data: followersData, error: followersError, loading: followersLoader } = useGitHubData<followers>('pablobenito2001');

    // repos
    type repos = Omit<GitHubResponse, 'followers' | 'avatar_url'>

    const { data: reposData, error: reposError, loading: reposLoader } = useGitHubData<repos[]>('pablobenito2001', '/repos');
    const totalProjects = computed<number>(() => reposData.value.filter((elem: repos) => elem.name.includes('-project')).length);
    const totalStars = computed<number>(() => reposData.value.reduce((acum: number, elem: repos) => elem.stargazers_count + acum , 0));
</script>
<style lang='scss' scoped>

</style>