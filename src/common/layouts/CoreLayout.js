import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import { AppContext } from '../../context/AppContext';

function CoreLayout({ children , history }) {
  const [user, setUser] = useState({ token: null })

  useEffect(() => {
    setUser({token: 'token'})
  }, [])

  return (
    <div className="main">
      <SideBar />
        <AppContext.Provider value={{ user }}>
          <div className="main__content">
            <Header history={history} />
            <div className="main__content__child">
              {children}
            </div>
          </div>
        </AppContext.Provider>
      <Player />
    </div>
  );
}

export default CoreLayout;
