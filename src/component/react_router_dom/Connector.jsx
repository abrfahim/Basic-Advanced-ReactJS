import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import ProductPage from './ProductPage';
import NotFound from './NotFound';

const Connector = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='profile/:facebookId/:youtubeID' element={<ProfilePage/>} />
                    <Route path='product/:id/:name' element={<ProductPage/>} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Connector;