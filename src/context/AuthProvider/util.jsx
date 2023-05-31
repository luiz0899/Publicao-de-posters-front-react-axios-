import blogFetch from "../../axios/config";


export function setUserLocalStorage (user ) {

    localStorage.setItem('u' , JSON.stringify(user));
}

export function getUserLocalStorage () {
    
    const json = localStorage.getItem('u');
   
    if(!json){
       
        return null ;
    }

    const user = JSON.parse(json);
    
    return user ?? null ;

}

export async function LoginRequest (email , password ) {
   
    try {
        const request = await blogFetch.post('postcontroller/autenticar',{email,password}) ;
       
        return request.data;

    } catch (error) {

        
        return console.log("erro na requisição do login");
       
    }
    
}