export default {
    fetchingDataFromGithub: (user: string, endpoint: string = ''): Promise<Response> =>{
        return fetch(`https://api.github.com/users/${ user }${ endpoint }` ,{
        method: "GET",
        headers: {
                'Authorization': 'Token ' + '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',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
    fetchingLocal: (to: string): Promise<Response> => {
        return fetch(`/data/${ to }.json`)
    }
}