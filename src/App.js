import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app)
function App() {
  const [user,setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn =() =>{
    signInWithPopup(auth,provider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log(error);})

  }
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser({});

    })
    .catch(error => {
      setUser({})
    })
    
  }
  return (
    <div className="App">
        {/* {
       user.email ? 
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        :<button onClick={handleSignOut}> Sing Out</button>
     } */}
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <button onClick={handleSignOut}> Sing Out</button>
      <h4> {user.displayName}</h4>
      <h4> {user.email}</h4>
    </div>
  );
}

export default App;
