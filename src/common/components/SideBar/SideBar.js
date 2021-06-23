import React from 'react';
import {
  Link,
  useLocation 
} from "react-router-dom";
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';

function renderSideBarOption(link, icon, text, { selected } = {}) {
  return (
    <Link to={link}
      className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </Link>
  )
}

export default function SideBar() {
  const location = useLocation();
  const { pathname } = location || {};

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: pathname === '/' })}
        {renderSideBarOption('/search', faSearch, 'Search', { selected: pathname === '/search' })}
        {renderSideBarOption('/favourites', faHeart, 'Favourites', { selected: pathname === '/favourites' })}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists', { selected: pathname === '/playlists' })}
        {renderSideBarOption('/charts', faStream, 'Charts', { selected: pathname === '/charts' })}
      </div>
    </div>
  );
}
