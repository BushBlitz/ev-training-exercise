import React, { Component } from 'react';

class Welcome extends Component{
    render() {
        const {groupName, teamName} = this.props
        return <h1>BIG Herd of {groupName} a.k.a {teamName}!</h1>
    }
}

export default Welcome