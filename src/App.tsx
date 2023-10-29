import React, { createContext, useContext } from 'react';
import './App.css';
import { WallScreen } from './wall/ui/Wall';
import { AppModule, IAppModule } from './di/AppModule';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ProfileScreen } from './profile/ui/Profile';

const dependencies = new AppModule()

const AppContext = createContext(dependencies)

export const App = () => {
    return <BrowserRouter>
      <AppContext.Provider value={dependencies}>
        <AppScreen/>
      </AppContext.Provider>
    </BrowserRouter>
}


function AppScreen() {
  const appModule : IAppModule = useContext(AppContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WallScreen wallModule={appModule.providesWallDomainModule()}/>}/>
        <Route path='profile' element={<ProfileScreen profileModule={appModule.providesProfileDomainModule()}/>}/>
      </Routes>
    </div>
  );
}

export default App;
