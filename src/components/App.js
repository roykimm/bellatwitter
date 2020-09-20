import React , { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fBase';


function App() {
  //console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn ] = useState(authService.currentUser);

  return (
    <>
      <AppRouter  isLoggedIn={isLoggedIn} />
      <footer>&copy; BellaTwitter { new Date().getFullYear() } </footer>
    </>
  )
}

export default App;
