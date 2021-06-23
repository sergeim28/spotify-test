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
      <span>search</span>
    </Route>
	
    <Route path="/favourites" >
      <span>favourites</span>
    </Route>
	
    <Route path="/playlists" >
      <span>playlists</span>
    </Route>
	
    <Route path="/charts" >
      <span>charts</span>
    </Route>
	
  </>;
}
