import { useState } from 'react';
import styled from 'styled-components';
import { AppRoute } from './appRoute';
import { Navigation } from "./components";
import { useLocation } from "react-router-dom"

// Get the hash of the url

const App = () => {

  const [isNav, toggleNav] = useState(false)

  const { pathname } = useLocation()

  return (
    <div>

      <AppContainer>
        {pathname !== "/" && <Navigation isNav={isNav} toggleNav={toggleNav} />}
        <AppRouteContainer>
          <AppRoute toggleNav={toggleNav} />
        </AppRouteContainer>
      </AppContainer>


    </div>
  )
}
const AppContainer = styled.div`
  display: flex;
`;

const AppRouteContainer = styled.div`
  flex: 1;
`;

export default App;
