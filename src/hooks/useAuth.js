import React, { useState } from 'react';
import { checkAuth } from '../firestore';

export const useAuth = () => {
  const [thisUser, setThisUser] = useState();

  React.useEffect(() => {
    try {
      checkAuth(async (user) => {
        await user;
        console.log(user);
        if (user) {
          const token = await user.getIdToken();
          const newUser = {
            displayName: user.displayName ?? '',
            email: user.email ?? '',
            token: token ?? '',
            photoLink:
              user.photoURL ??
              `https://robohash.org/${user.displayName ?? token}.png?bgset=bg2`,
          };

          setThisUser(newUser);
          console.log(
            `displayName: ${newUser.displayName}, photoLink: ${newUser.photoLink}, email: ${newUser.email}`
          );
        } else {
          console.log("nobody's signed in");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return thisUser;
};

export default useAuth;
