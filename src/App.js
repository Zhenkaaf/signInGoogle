
import './App.css';

import { auth } from './Firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import HomePage from './HomePage/HomePage';




function App() {
  const [isUserSignedIn, setUser] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [fullName, setFullName] = useState('');

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        
        setImgUrl(result.user.photoURL);
        setFullName(result.user.displayName);
        setUser(true);
        console.log(result.user.displayName);
        console.log(result.user.photoURL);
        
      }).catch((error) => {
        console.log(error);
      });
  }

  /* if (isUserSignedIn) {
    return (
      <div>
       <HomePage setUser={setUser}/>
      </div>
    );
  }
  else {
    return (
      <div>
       <button onClick={signInGoogle}>
       signInUsingGoogle
        </button>
      </div>
    )
  } */
  return (
    <div>
      {isUserSignedIn ?

        <div>
          <HomePage setUser={setUser} imgUrl={imgUrl} fullName={fullName}/>
        </div>

        :

        <div>
          <button onClick={signInGoogle}>
            signInUsingGoogle
          </button>
        </div>}

    </div>
  )
}

export default App;
