import React from 'react';
import './App.css';
import { WallScreen } from './wall/ui/Wall';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ProfileScreen } from './profile/ui/Profile';
import { NavBar } from './navbar/NavBar';
import { PostDetailScreen } from './post/ui/Detail/PostDetail';


const tabs = [
  {
    label:"Home",
    icon:"homeIcon",
    route:"/"
  },
  {
    label:"Profile",
    icon:"profileIcon",
    route:"profile"
  }
]

export const App = () => {
    return <BrowserRouter>
        <AppScreen/>
    </BrowserRouter>
}

function AppScreen() {
  return (
    <div className="App">
      <NavBar tabs={tabs}/>
      <Routes>
        <Route path='/' element={<WallScreen/>}/>
        <Route path='profile' element={<ProfileScreen/>}/>
        <Route path='profile/post/:id' element={<PostDetailScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
