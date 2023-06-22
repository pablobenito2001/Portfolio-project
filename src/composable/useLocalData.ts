import { ref, Ref} from "vue";
import API from "../services/API";

export const useLocalData = <T>(to: string) => {
    const data = ref<T | null>(null) as Ref<T>;
    const loading = ref<boolean>(false);
    const error = ref<Error | null>(null) as Ref<Error>;

    async function getData(to: string){
        try{
            loading.value = false;
            const res: Awaited<Response> = await API.fetchingLocal(to);
            const rawData: Awaited<T> = await res.json();
            if(res.ok){
                loading.value = true;
                data.value = rawData;
            }else{
                throw new Error('Something went wrong' + res.status + ' ' + res.statusText);
            }
        }catch(e){
           console.error(e);
           if(e instanceof Error) error.value = e; 
        }
    }
    getData(to);

    return {
        data,
        loading,
        error,
        getData
    }
}