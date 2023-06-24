export default {
    fetchingDataFromGithub: (user: string, endpoint: string = ''): Promise<Response> =>{
        return fetch(`https://api.github.com/users/${ user }${ endpoint }`);
    },
    fetchingLocal: (to: string): Promise<Response> => {
        return fetch(`/data/${ to }.json`)
    }
}