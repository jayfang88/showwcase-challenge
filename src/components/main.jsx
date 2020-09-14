import React from 'react';
import SchoolInfoCard from './school_info_card.jsx';

class Main extends React.Component {
    constructor() {
        super();
        this.education = [
            {name: 'UC Berkeley', degree: 'BA', field: 'Psychology', start: '2012', end: '2016', gpa: '3.5', description: 'nice school'},
            {name: 'App Academy', degree: 'Certificate', field: 'Full Stack Software Engineering', start: '2019', end: '2020', gpa: 'N/A', description: 'coding bootcamp'},
        ];
    }

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
        if (this.props.location.state && this.props.location.state.name) {
            name = this.props.location.state.name;
        } else {
            name = 'No Name';
        }

        let titles = this.education.map(school => <li>{school.name}</li>);
        let schools = this.education.map(school => <SchoolInfoCard school={school}/>)

        return (
            <div className='main'>
                <header className='main-header'>
                    <h2>Welcome to <span className='bold'>{name}'s</span> education page.</h2>
                    <button className='add-education'>Add new education</button>
                </header>
                <main className='main-body'>
                    <aside className='main-aside'>
                        <p className='main-aside-info'>{titles}</p>
                    </aside>
                    <section className='main-section'>
                        <p className='main-section-info'>{schools}</p>
                    </section>
                </main>
            </div>
        )
    }
}

export default Main;