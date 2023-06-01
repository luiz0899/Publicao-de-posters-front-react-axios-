import blogFetch from "../axios/config";

export async function LoginRequest (email , password ) {
   
    try {
        const request = await blogFetch.post('postcontroller/autenticar',{email,password}) ;
       
        return request.data;

    } catch (error) {

        
        return console.log("erro na requisição do login");
       
    }
    
}