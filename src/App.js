import React, { useEffect, useState } from 'react'
import { AppContext } from './context/AppContext';
import config from './config'

export default function App({children}) {
  const [user, setUser] = useState({ token: ''})

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + btoa(config.api.clientId + ':' + config.api.clientSecret));
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch(config.api.authUrl, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        setUser({ token: result.access_token })
      )
      .catch((error) => console.log("error", error));
  }, []);

    return <AppContext.Provider value={{ user }}>
        {children}
    </AppContext.Provider>
}