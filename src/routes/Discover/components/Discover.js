import React, { useContext } from 'react';
import { useQuery } from 'react-query'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import { client } from '../../../utils/api-client.final';
import '../styles/_discover.scss';
import { AppContext } from '../../../context/AppContext';

const Discover= () => {
  const { user } = useContext(AppContext)

  const { data: newReleases } = useQuery({
    queryKey: 'get-new-releases',
    queryFn: () =>
      client(`get-new-releases`, { token: user.token }).then(data => data),
  })
  
  const { data: playlists } = useQuery({
    queryKey: 'featured-playlists',
    queryFn: () =>
      client(`featured-playlists`, { token: user.token }).then(data => data),
  })
  
  const { data: categories } = useQuery({
    queryKey: 'categories',
    queryFn: () =>
      client(`categories`, { token: user.token }).then(data => data),
  })

  return (
    <div className="discover">
      <DiscoverBlock text="Release this week" id="released" data={newReleases || []} />
      <DiscoverBlock text="Featured playlists" id="featured" data={playlists || []} />
      <DiscoverBlock text="Browse" id="browse" data={categories || []} imagesKey="icons" />
    </div>
  );
}

export default Discover