import React, { useContext, useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import { client } from '../../../utils/api-client.final';
import '../styles/_discover.scss';
import { AppContext } from '../../../context/AppContext';

const Discover= () => {
  const { user } = useContext(AppContext)

  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client(`get-new-releases`, { token: user.token }).then(data => {
      setNewReleases(data || [])
    })
  }, [])

  useEffect(() => {
    client(`featured-playlists`, { token: user.token }).then(data => {
      setPlaylists(data || [])
    })
  }, [])

  useEffect(() => {
    client(`categories`, { token: user.token }).then(data => {
      setCategories(data || [])
    })
  }, [])

  return (
    <div className="discover">
      <DiscoverBlock text="Release this week" id="released" data={newReleases} />
      <DiscoverBlock text="Featured playlists" id="featured" data={playlists} />
      <DiscoverBlock text="Browse" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
}

export default Discover