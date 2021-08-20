import React from 'react';
import Card from './Card';

const CardList = (props) => (
    <div>
        {props.profiles.map((profile) => <Card key={profile.login} {...profile} />)}
    </div>
);

export default CardList;