import React from 'react';
import Modal from 'react-modal';
import SchoolInfoCard from './school_info_card.jsx';

Modal.setAppElement('#root')

const Main = (props) => {
    let temp = [
        {name: 'UC Berkeley', degree: 'BA', field: 'Psychology', start: '2012', end: '2016', gpa: '3.5', description: 'nice school'},
        {name: 'App Academy', degree: 'Certificate', field: 'Full Stack Software Engineering', start: '2019', end: '2020', gpa: 'N/A', description: 'coding bootcamp'},
    ];
    const [education, addEducation] = React.useState(temp);

    let name;
    if (props.location.state && props.location.state.name) {
        name = props.location.state.name;
    } else {
        name = 'No Name';
    }

    const blankEdu = {
        name: '',
        degree: '',
        field: '',
        start: '',
        end: '',
        gpa: '',
        description: ''
    };
    const [newEdu, updateEdu] = React.useState(blankEdu);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50vw',
            height: '200px',
        }
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    function handleSubmit() {
        let updatedList = [newEdu].concat(education.slice());
        addEducation(updatedList);
        console.log(education);
        updateEdu(blankEdu);
        closeModal();
    }


    let titles = Object.values(education).map((school, i) => <li key={i} className='edu-li'>{school.name}</li>);
    let schools = Object.values(education).map((school, i) => <SchoolInfoCard school={school} key={i} />)


    return (
        <div className='main'>
            <header className='main-header'>
                <h2>Welcome to <span className='bold'>{name}'s</span> education page.</h2>
                <button className='add-education' onClick={openModal}>Add new education</button>
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    className={'modal'}
                    // overlayClassName={'modal-overlay'}
                >
                    <h2 className='modal-head'>New Education Modal</h2>
                    <form className='modal-form'>
                        <label>Name:
                            <input type="text" onChange={(e) => updateEdu({...newEdu, name: e.target.value})} value={newEdu.name}/>
                        </label>
                        <label>Degree:
                            <input type="text" onChange={(e) => updateEdu({...newEdu, degree: e.target.value})} value={newEdu.degree} />
                        </label>
                        <label>Field:
                            <input type="text" onChange={(e) => updateEdu({...newEdu, field: e.target.value})} value={newEdu.field} />
                        </label>
                        <label>Start:
                            <input type="text" onChange={(e) => updateEdu({...newEdu, start: e.target.value})} value={newEdu.start} />
                        </label>
                        <label>End:
                            <input type="text" onChange={(e) => updateEdu({...newEdu, end: e.target.value})} value={newEdu.end} />
                        </label>
                        <label>Grade:
                            <input type="text" onChange={(e) => updateEdu({...newEdu, gpa: e.target.value})} value={newEdu.gpa} />
                        </label>
                        <label>Description:
                            <textarea onChange={(e) => updateEdu({ ...newEdu, description: e.target.value })} value={newEdu.description}>{newEdu.description}</textarea>
                        </label>
                        <button type='button' onClick={() => handleSubmit()}>Save</button>
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