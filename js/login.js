import { getAuth, signInWithEmailAndPassword }
from "firebase/auth";

const auth = getAuth();

signInWithEmailAndPassword(
  auth,
  email,
  senha
)
.then((userCredential) => {
  console.log("Login realizado");
})
.catch((error) => {
  console.log(error.message);
});