import React from 'react';
import Menu from './Menu';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {

    // passing parameters through Connector
    let {facebookId, youtubeID} = useParams();

    return (
        <div>
            <Menu/>
            <h1>This is Profile Page</h1>
            <p>Fb: {facebookId}</p>
            <p>Yt: {youtubeID}</p>
        </div>
    );
};

export default ProfilePage;