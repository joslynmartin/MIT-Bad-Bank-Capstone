const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const DisplayContext = React.createContext(null);



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxBrQVrxtQ_Rh5IceDD0xbuHbzUQbIFMg",
  authDomain: "bankcapstone-a3e04.firebaseapp.com",
  projectId: "bankcapstone-a3e04",
  storageBucket: "bankcapstone-a3e04.appspot.com",
  messagingSenderId: "201197925383",
  appId: "1:201197925383:web:7a129b95ffbd5dc886e6a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "25rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
