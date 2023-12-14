import firebase from "../Config/firebase" 

export const create = async (userData)=>{
    
       const responseUser = await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password);
    
       console.log(responseUser.user.uid);

       if(responseUser.user.uid){
        await firebase.firestore().collection("usuarios").add({

            nombre: userData.nombre,
            apellido: userData.apellido,
            userId: responseUser.user.uid
        });
        return responseUser.user.uid;
       }
};

export const login = async(email,password)=>{

   const responseUser = await firebase.auth().signInWithEmailAndPassword(email,password)
   return responseUser?.user?.uid || null
}