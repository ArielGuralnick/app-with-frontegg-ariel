import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuth, useLoginWithRedirect, ContextHolder, useAuthActions} from "@frontegg/react";
import { AdminPortal } from '@frontegg/react';


function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();
 // Use user.tenantIds to get the tenants the user is a member of
 const handleSwitchTenant = () => { 
  switchTenant({ tenantId: 'new-tenant-id1' });
  switchTenant({ tenantId: 'new-tenant-id2' });
};

  

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };
  
 

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl ?? ''} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken  ?? '')}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
          <button onClick={handleClick}>Settings</button>
          </div>
          <div>
          <button onClick={handleSwitchTenant}>Select Active Tenant</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;