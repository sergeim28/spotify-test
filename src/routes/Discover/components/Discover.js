import React, { useContext } from 'react';
import { useQuery } from 'react-query'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import { client } from '../../../utils/api-client.final';
import '../styles/_discover.scss';
import { AppContext } from '../../../context/AppContext';

const Discover= () => {
  const { user } = useContext(AppContext)

  const { data: newReleases } = useQuery(['new-releases', user], () =>
      client(`new-releases`, { token: user.token }).then(data => data?.albums?.items || []),
  )
  
  const { data: playlists } = useQuery(['featured-playlists', user], () =>
      client(`featured-playlists`, { token: user.token }).then(data => data?.playlists?.items || []))
  
  const { data: categories } = useQuery(['categories', user], () =>
      client(`categories`, { token: user.token }).then(data => data?.categories?.items || []))

  return (
    <div className="discover">
      <DiscoverBlock text="Release this week" id="released" data={newReleases || []} />
      <DiscoverBlock text="Featured playlists" id="featured" data={playlists || []} />
      <DiscoverBlock text="Browse" id="browse" data={categories || []} imagesKey="icons" />
    </div>
  );
}

export default Discover