import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import Home from './pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="users" element={<div>Users</div>}/>
            <Route path="users/:id" element={<div>User id</div>}/>
        </Routes>
    );
}

export default App;
