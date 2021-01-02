import axios from "axios";
//axios.defaults.baseURL="http://localhost:4000/api/";
axios.defaults.baseURL= "https://terminal-api1.herokuapp.com/api/products";



axios.defaults.headers.common["x-auth-token"]=localStorage.getItem("token");
class Generic{
    constructor(){}
    get =(url)=> new Promise((resolve,reject)=>{
            axios.get(url).then(res=>{resolve(res.data)}).catch(err=>{
                reject(err);
            });
    });
    post =(url,data)=>new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{resolve(res.data)}).catch(err=>{
            reject(err);
        });
});
    delete =(url)=>new Promise((resolve,reject)=>{
        axios.delete(url).then(res=>{resolve(res.data)}).catch(err=>{
            reject(err);
        });
});
    put =(url,data)=>new Promise((resolve,reject)=>{
        axios.put(url,data).then(res=>{resolve(res.data)}).catch(err=>{
            reject(err);
        });
});
}
export default Generic;