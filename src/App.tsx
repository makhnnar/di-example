import React, { createContext, useContext } from 'react';
import './App.css';
import { WallScreen } from './wall/ui/Wall';
import { AppModule } from './di/AppModule';

const dependencies = new AppModule()

const AppContext = createContext(dependencies)

export const App = () => {
    return <AppContext.Provider value={dependencies}>
      <AppScreen/>
    </AppContext.Provider>
} 


function AppScreen() {
  const profileRepository = useContext(AppContext).providesProfileRepository()
  return (
    <div className="App">
      <WallScreen profileRepository={profileRepository}/>
    </div>
  );
}

export default App;
