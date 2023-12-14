
import firebase from "../Config/firebase";


export function getAllProductos() {
return firebase.firestore().collection("productos").get()
}
export function getById(id) {
return firebase.firestore().doc(`productos/${id}`).get();
}

export async function create(data) {
  return firebase.firestore().collection("productos").add({
    title:data.title,
    price: data.price,
    thumbnail: data.thumbnail,
    condition: data.condition,
    resumen: data.resumen,
  });

}

export async function update(id, data) {
  return firebase.firestore().doc(`productos/${id}`).set(data);
}

export async function deleteProductos(id) {
  return firebase.firestore().doc(`productos/${id}`).delete();
}
