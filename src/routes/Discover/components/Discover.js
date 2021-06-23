import React, { useContext } from 'react';
import { useQueries } from 'react-query'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import { client } from '../../../utils/api-client.final';
import '../styles/_discover.scss';
import { AppContext } from '../../../context/AppContext';

const Discover= () => {
  const { user } = useContext(AppContext)
  const endpoints = [['new-releases', 'albums'], ['featured-playlists', 'playlists'], ['categories', 'categories']]

  const fetchedData = useQueries(
     endpoints.map(([endpoint, dataKey]) => {
       return {
         queryKey: [endpoint, user.token],
         queryFn: () => client(endpoint, { token: user.token }).then(data => data?.[dataKey]?.items || []),
       }
     })
   )

  return (
    <div className="discover">
      <DiscoverBlock text="Release this week" id="released" data={fetchedData?.[0]?.data || []} />
      <DiscoverBlock text="Featured playlists" id="featured" data={fetchedData?.[1]?.data || []} />
      <DiscoverBlock text="Browse" id="browse" data={fetchedData?.[2]?.data || []} imagesKey="icons" />
    </div>
  );
}

export default Discover