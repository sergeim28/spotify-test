import React from 'react';
import { Route } from 'react-router-dom'
import Discover from './Discover';

export default function Routes() {
  // Here you'd return an array of routes
  return <>
    <Route path="/" exact >
      <Discover />
    </Route>
    
    <Route path="/search" >
    </Route>
	
    <Route path="/favourites" >
    </Route>
	
    <Route path="/playlists" >
    </Route>
	
    <Route path="/charts" >
    </Route>
	
  </>;
}
