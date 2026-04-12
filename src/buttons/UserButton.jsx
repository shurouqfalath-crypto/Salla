import React from 'react';
// import user from '../images/uuser.jpg';
import profile from '../images/user-profile-account-person.svg';
export default function UserButton() {
  return (
    <div className='flex items-center gap-4'>
      <a href='/login'>
        <button className='w-10 h-10 rounded-full flex items-center justify-center bg-teal-200'>
          <img src={profile} alt="User" className='w-6 h-6 object-contain' />
        </button>
      </a>
    </div>
  );
}