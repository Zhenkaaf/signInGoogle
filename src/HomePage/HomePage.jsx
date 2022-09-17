import { getAuth, signOut } from "firebase/auth";


const HomePage = (props) => {
    const exitGoogle = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          props.setUser(false);
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }
    return (
        <div>
            <img src={props.imgUrl} alt="" />
          hello {props.fullName}! this is homePage! you are signedIn <br></br>
          <button onClick={exitGoogle}>
            exit
          </button>
        </div>
      );
}
export default HomePage;