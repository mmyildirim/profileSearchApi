class Profile{
    constructor(){
        this.clientId='',
        this.clientSecret=''
    }
    async getProfile(userName){
        const profileReponse=await fetch("https://jsonplaceholder.typicode.com/users?username="+userName);
        const profile= await profileReponse.json(); 
        
        const todos=await fetch("https://jsonplaceholder.typicode.com/todos?userId="+profile[0].id)
        const todo=await todos.json();
       return{
           profile,
           todo
       }
       
    }
}

