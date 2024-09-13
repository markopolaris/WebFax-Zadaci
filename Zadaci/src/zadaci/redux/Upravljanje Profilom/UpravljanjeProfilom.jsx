import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail, updateBio } from './profileSlice';

function UpravljanjeProfilom() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        value={profile.name}
        onChange={(e) => dispatch(updateName(e.target.value))}
        placeholder="Name"
      />
      <input
        type="email"
        value={profile.email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
        placeholder="Email"
      />
      <textarea
        value={profile.bio}
        onChange={(e) => dispatch(updateBio(e.target.value))}
        placeholder="Bio"
      />
    </div>
  );
}

export default UpravljanjeProfilom;
