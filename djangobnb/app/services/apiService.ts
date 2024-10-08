import { getAccessToken } from "../lib/action"

const apiService = {
   get: async function(url:string): Promise<any>{
    console.log('get',url)
    const token = await getAccessToken();

    return new Promise((resolve, reject)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`, //authorize in backend 
            }
        })
        .then(response => response.json())
        .then((json)=>{
            console.log('Response', json)

            resolve(json)
        })
        .catch((error)=>{
            reject(error)
        })
    })
   },

   post: async function(url:string, data: any):Promise<any> {
     console.log('post',url,data)
     const token = await getAccessToken();

     return new Promise((resolve, reject)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
            method:'POST',
            body: data,
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then((json)=>{
            console.log('Response from post', json)
            resolve(json);
        })
        .catch((error) =>{
            console.log('Error:',error);
            reject(error);
        })
     })
   },

   postWithoutToken: async (url:string, data: any):Promise<any> => {
     return new Promise((resolve, reject)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
            method: 'POST',
            body: data,
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        })
        .then(response => response.json())
        .then((json)=>{
            console.log('Response from signup', json)
            resolve(json);
        })
        .catch((error)=>{
            reject(error);
        })
     })
   }
}

export default apiService;