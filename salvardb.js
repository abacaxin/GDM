import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";

const db = getFirestore();

await setDoc(doc(db, "usuarios", user.uid), {
  nome: nome,
  email: email,
  tipo: "cliente"
});