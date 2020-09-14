import React from 'react';

class Main extends React.Component {
    componentDidMount() {
        // if (this.props.location.state) {
        //     this.name = this.props.location.state.name;
        // } else {
        //     this.name = 'No Name';
        // }
        // debugger;
    }

    render() {
        let name;
        if (this.props.location.state) {
            name = this.props.location.state.name;
        } else {
            name = 'No Name';
        }
        return (
            <div>
                <p>{name}</p>
            </div>
        )
    }
}

export default Main;