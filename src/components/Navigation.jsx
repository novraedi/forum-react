import React from 'react';
import { Link } from 'react-router-dom';
import { IoChatboxEllipses } from 'react-icons/io5';
import { MdLeaderboard } from 'react-icons/md';
import { LiaSignOutAltSolid } from 'react-icons/lia';

function Navigation({ user, logout }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <IoChatboxEllipses size="32" />
            <p>Threads</p>
          </Link>
        </li>
        <li>
          <Link to="/leaderboards">
            <MdLeaderboard size="32" />
            <p>Leaderboards</p>
          </Link>
        </li>
      </ul>
      <div className="user">
        <img src={user.avatar} alt={user.name} className="user__img" />
        <p className="user__name">{user.name}</p>
        <button
          type="button"
          className="user__logout"
          aria-label="logout"
          onClick={logout}
        >
          <LiaSignOutAltSolid size="32" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
