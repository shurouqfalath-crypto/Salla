import React, { useContext } from 'react';
import profile from '../images/user-profile-account-person.svg';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function UserButton() {
  const { user } = useContext(AuthContext);

  return (
    <Link to="/login" className="flex items-center gap-2">
      
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-200">
        <img src={profile} alt="User" className="w-6 h-6 object-contain" />
      </button>

      {user && (
        <span className="text-sm font-medium whitespace-nowrap">
          {user.firstName}
        </span>
      )}

    </Link>
  );
}