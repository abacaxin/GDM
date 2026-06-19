import { getAuth, createUserWithEmailAndPassword }
from "firebase/auth";

const auth = getAuth();

createUserWithEmailAndPassword(
  auth,
  email,
  senha
)
.then((userCredential) => {
  console.log("Usuário criado");
})
.catch((error) => {
  console.log(error.message);
});