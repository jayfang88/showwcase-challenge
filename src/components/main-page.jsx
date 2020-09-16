import React from 'react';
import Modal from 'react-modal';
import SchoolInfoCard from './school_info_card.jsx';

Modal.setAppElement('#root')

const Main = (props) => {
    let education = [
        {name: 'UC Berkeley', degree: 'BA', field: 'Psychology', start: '2012', end: '2016', gpa: '3.5', description: 'nice school'},
        {name: 'App Academy', degree: 'Certificate', field: 'Full Stack Software Engineering', start: '2019', end: '2020', gpa: 'N/A', description: 'coding bootcamp'},
    ];

    let name;
    if (props.location.state && props.location.state.name) {
        name = props.location.state.name;
    } else {
        name = 'No Name';
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }

    let titles = education.map((school, i) => <li key={i} className='edu-li'>{school.name}</li>);
    let schools = education.map((school, i) => <SchoolInfoCard school={school} key={i}/>)

    function addEducation(name, degree, field, start, end, gpa, description) {
        education.unshift({
            name: `${name}`,
            degree: `${degree}`,
            field: `${field}`,
            start: `${start}`,
            end: `${end}`,
            gpa: `${gpa}`,
            description: `${description}`
        });
    }

    return (
        <div className='main'>
            <header className='main-header'>
                <h2>Welcome to <span className='bold'>{name}'s</span> education page.</h2>
                <button className='add-education' onClick={openModal}>Add new education</button>
                <Modal 
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2>Dis the modal</h2>
                    <form>
                        <input type="text"/>
                    </form>
                </Modal>
            </header>
            <main className='main-body'>
                <aside className='main-aside'>
                    <p className='main-aside-info'>{titles}</p>
                </aside>
                <section className='main-section'>
                    <div className='main-section-info'>{schools}</div>
                </section>
            </main>
        </div>
    )
    
}

export default Main;