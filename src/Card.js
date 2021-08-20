import React from 'react';

class Card extends React.Component {
    render(){
        const profile = this.props;
        return(
            <div className="github-profile">
                <img src = {profile.avatar_url}/>
                <div className="info">
                    <div className="name">Login ID : {profile.login}</div>
                    <div className="company">Company Name: {profile.company}</div>
                    <div className="company"># of Public Repositories : {profile.public_repos}</div>
                </div>
            </div>
        );
    }
}

export default Card;