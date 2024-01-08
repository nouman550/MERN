import {ALL_USER_FAIL,
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    NEW_USER_FAIL,
    NEW_USER_REQUEST,
    NEW_USER_SUCCESS, 
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_SUCCESS,
    CLEAR_ERRORS,
    UPDATE_PASSWORD_REQUEST,
    ADMIN_USERS_REQUEST,
    ADMIN_USERS_SUCCESS,
    ADMIN_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    SINGLE_USER_REQUEST,
    SINGLE_USER_SUCCESS,
    SINGLE_USER_FAIL
}
     from "../constants/userConsants";

     import axios from "axios";


     export const login=(email,password)=>async(dispatch)=>{
      
       
        try {

            dispatch({
                type:ALL_USER_REQUEST
            })
    
             const config={headers:{"Content-Type":"application/json"}}
             const {data}=await axios.post("/api/v1/login",{email,password},config)
            
         
    
            dispatch({
                type:ALL_USER_SUCCESS,
                payload:data.user
            })
            
        } catch (error) {
          
             
          
            dispatch({
                type:ALL_USER_FAIL,
                payload:error.response.data.error
            })
        
        }

     }



     export const register=(name,email,password)=>async(dispatch)=>{
      
       console.log("data"+name+" "+email+" "+password)
        try {

                              dispatch({
                             type:NEW_USER_REQUEST
            })
              
            const config={headers:{"Content-Type":"application/json"}}
             const {data}=await axios.post("/api/v1/register",{name,email,password},config)
            
         
    
            dispatch({
                type:NEW_USER_SUCCESS,
                payload:data.user
            })
            
        } catch (error) {
            dispatch({
                type:NEW_USER_FAIL,
                payload:error.response.data.error
            })
        }

     }






      //loadUser

      export const loadUser=()=>async(dispatch)=>{
      
       
        try {

            dispatch({
                type:LOAD_USER_REQUEST
            })
    
             
             const {data}=await axios.get("/api/v1/me")
            
         
    
            dispatch({
                type:LOAD_USER_SUCCESS,
                payload:data.user
            })
            
        } catch (error) {
          
             
          
            dispatch({
                type:LOAD_USER_FAIL,
                payload:error.response.data.error
            })
        
        }

     }

     //End session of user


     export const logoutUser=()=>async(dispatch)=>{
      
       
        try {

           
    
             
            await axios.get("/api/v1/logout")
            
         
    
            dispatch({
                type:LOGOUT_USER_SUCCESS
            })
            
        } catch (error) {
          
             
          
            dispatch({
                type:LOGOUT_USER_FAIL,
                payload:error.response.data.error
            })
        
        }

     }

     //it will clear errors 
export const clearErrors=()=>async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}






  //Update_Password of user..

  export const updatePassword=(oldPassword,newPassword,confirmPassword)=>async(dispatch)=>{
                               

      

     try {

            dispatch({
                type:UPDATE_PASSWORD_REQUEST
            })


                   const config={headers:{"Content-Type":"application/json"}}
                      const {data}=await axios.put("/api/v1/password/update",{oldPassword,newPassword,confirmPassword},config)
       
   

        dispatch({
            type:UPDATE_PASSWORD_SUCCESS,
            payload:data.user
        })
        
    } catch (error) {
      
         
      
        dispatch({
            type:UPDATE_PASSWORD_FAIL,
            payload:error.response.data.error
        })
    
    }

 }






  //Show all users by ADMIN

  export const showAdminUsers=()=>async(dispatch)=>{
                               

      

    try {

           dispatch({
               type:ADMIN_USERS_REQUEST
           })


      const {data}=await axios.get("/api/v1/admin/users")
      
  

       dispatch({
           type:ADMIN_USERS_SUCCESS,
           payload:data
       })
       
   } catch (error) {
     
        
     
       dispatch({
           type:ADMIN_USERS_FAIL,
           payload:error.response.data.error
       })
   
   }

}


//delete a single user by admin
export const deleteUser=(id)=>async(dispatch)=>{
      
       
    try {

       
        

            dispatch({
                type:DELETE_USER_REQUEST
            })
         
        await axios.delete(`/api/v1/admin/user/${id}`)
        
     

        dispatch({
            type:DELETE_USER_SUCCESS
        })
        
    } catch (error) {
      
         
      
        dispatch({
            type:DELETE_USER_FAIL,
            payload:error.response.data.error
        })
    
    }

 }

 
//delete a single user by admin
export const getSingleUser=(id)=>async(dispatch)=>{
      
       
    try {

       
        

            dispatch({
                type:SINGLE_USER_REQUEST
            })
         
       const {data} =  await axios.get(`/api/v1/admin/user/${id}`)
        
     

        dispatch({
            type:SINGLE_USER_SUCCESS,
            payload:data
        })
        
    } catch (error) {
      
         
      
        dispatch({
            type:SINGLE_USER_FAIL,
            payload:error.response.data.error
        })
    
    }

 }



