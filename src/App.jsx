import React, { useState } from 'react';
import BotList from './Component/BotList.jsx';
import './App.css';

import lucyImage from './Assets/lucy.png';
import mewwmeImage from './Assets/meavatar.png';
import mooImage from './Assets/moo.png';
import miuImage from './Assets/miumiu.png';
import radioImage from './Assets/62radio.png';

function App() {

    const [bots, setBots] = useState([
        {
            name: 'L u c y ♡',
            image: lucyImage,
            servers: '3 servers',
            language: 'discord.js',
            prefix: 'lucy/',
            description: 'Music, Economy, Leveling, Fun, Reaction Roles, Moderation, and lots more!',
            website: 'https://lucy.is-a.fun/',
            invite: 'https://discord.com/api/oauth2/authorize?client_id=928966154817523723&permissions=964756499798&redirect_uri=https%3A%2F%2Fdash-lucy.is-a.fun%2Fapi%2Fcallback&response_type=code&scope=bot%20applications.commands%20guilds',
        },
		{
            name: 'Mewwme`s',
            image: mewwmeImage,
            servers: '1 servers',
            language: 'discord.js',
            prefix: 'me',
            description: `The Discord music bot that's 100% free with no payment or votes required to access all its amazing functionalities.`,
            website: 'https://meww.me/',
            invite: 'https://discord.com/api/oauth2/authorize?client_id=928711702596423740&permissions=551940385840&redirect_uri=https%3A%2F%2Fmewwme.is-a.fun%2Fthankyou&response_type=code&scope=bot%20applications.commands%20guilds',
        },
        {
            name: 'Moo ♪',
            image: mooImage,
            servers: '1 servers',
            language: 'discord.js',
            prefix: 'moo',
            description: 'Moo ♪  a discord bot music for the community',
            website: 'https://moo.is-a.fun/',
            invite: 'https://discord.com/api/oauth2/authorize?client_id=1135151608565616662&permissions=551940385840&scope=bot%20applications.commands',
        },
        {
            name: 'Miu🌛',
            image: miuImage,
            servers: '1 servers',
            language: 'discord.js',
            prefix: 'miu',
            description: 'Listen to your favourite music on discord with your friends!',
            website: 'https://miu.is-a.fun/',
            invite: 'https://discord.com/api/oauth2/authorize?client_id=836975617748500520&permissions=824633845824&scope=bot%20applications.commands',
        },
        {
            name: '+62Radio',
            image: radioImage,
            servers: '1 servers',
            language: 'discord.js',
            prefix: 'r.',
            description: 'a simple Discord music bot to play a radio from some Indonesian radio-station',
            website: 'https://62radio.is-a.fun/',
            invite: 'https://discord.com/oauth2/authorize?client_id=1090120136167538748&permissions=551940254784&redirect_uri=https%3A%2F%2F62radio.is-a.fun%2Fthankyou&response_type=code&scope=guilds.join%20bot%20applications.commands',
        },
    ]);

    return (
        <>
            <div>
                <h1>Made by TRAGIC's Discord Bots</h1>
                <BotList bots={bots} />
            </div>
        </>
    );
}

export default App;