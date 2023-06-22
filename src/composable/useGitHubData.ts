import { ref, Ref } from 'vue';
import API from '../services/API';


export const useGitHubData = <T>(users: string, endpoint: string = '') => {
    const data = ref<T | null>(null) as Ref<T>;
    const loading = ref<boolean>(false);
    const error = ref<Error | null>(null) as Ref<Error>;

    async function fetchData(users: string, endpoint: string = ''){
        try{
            loading.value = false;
            const res: Awaited<Response> = await API.fetchingDataFromGithub(users, endpoint);
            const rawData: Awaited<T> = await res.json();
            if(res.ok){
                loading.value = true;
                data.value = rawData;
            }else{
                throw new Error('Something went wrong' + res.statusText + ' ' + res.status);
            }
        }catch (e){
           console.error(e);
           if(e instanceof Error) error.value = e; 
        }
    };
    fetchData(users, endpoint);

    return {
        data,
        error,
        loading,
        fetchData
    }
}