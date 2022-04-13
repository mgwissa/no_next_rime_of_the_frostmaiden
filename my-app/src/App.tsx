import React from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, Typography, CardMedia, Link } from "@mui/material";
import theme from "./theme/theme";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
// import MongoDB from "./components/MongoDB/MongoDB";


import * as Realm from "realm-web";

const REALM_APP_ID = "rime-of-the-frostmaiden-notes-rvcre";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });


// Create a component that displays the given user's details
const UserDetail: React.FC<{ user: Realm.User }> = ({ user }) => {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}

// Create a component that lets an anonymous user log in
const Login: React.FC<{ setUser: (user: Realm.User) => void }> = ({ setUser }) => {
  const loginAnonymous = async () => {
    const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}


const App: React.FC = () => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = React.useState<Realm.User | null>(app.currentUser);

  // If a user is logged in, show their details. Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/notes" element={<Notes />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
