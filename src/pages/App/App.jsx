import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewTourPage from "../NewTourPage/NewTourPage";
import AllToursPage from '../AllToursPage/AllToursPage';
import EditTourPage from '../EditTourPage/EditTourPage';
import TourPage from '../TourPage/TourPage';

import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/tours/:id" element={<TourPage />} />
              <Route path="/tours/new" element={<NewTourPage />} />
              <Route path="/tours" element={<AllToursPage />} />
              <Route path="/tours/:id/edit" element={<EditTourPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
