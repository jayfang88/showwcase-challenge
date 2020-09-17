import React from 'react';
import Modal from 'react-modal';
import SchoolInfoCard from './school_info_card.jsx';

Modal.setAppElement('#root')

const Main = (props) => {
    let name;
    if (props.location.state && props.location.state.name) {
        name = props.location.state.name;
    } else {
        name = 'No Name';
    }

    let temp = [
        { name: 'UC Berkeley', degree: 'BA', field: 'Psychology', start: '2012', end: '2016', gpa: '3.5', description: 'nice school' },
        { name: 'App Academy', degree: 'Certificate', field: 'Full Stack Software Engineering', start: '2019', end: '2020', gpa: 'N/A', description: 'coding bootcamp' },
    ];
    const [education, addEducation] = React.useState(temp);

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

    function autocomplete(query) {
        fetch(`http://universities.hipolabs.com/search?name=${query}`)
            .then(blob => blob.json())
            .then(data => console.log(data))
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
                className={'modal'}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(80, 80, 80, 0.7)',
                    }
                }}
            >
                <h2 className='modal-head'>New Education Modal</h2>
                <form className='modal-form'>
                    <label className='modal-label'>Name of School</label>
                    <input type="text" 
                    onChange={(e) => updateEdu({...newEdu, name: e.target.value})} 
                    value={newEdu.name} className='modal-input'/>
                    <label className='modal-label'>Degree</label>
                    <input type="text" 
                    onChange={(e) => updateEdu({...newEdu, degree: e.target.value})} 
                    value={newEdu.degree} className='modal-input'/>
                    <label className='modal-label'>Field of study</label>
                    <input type="text" 
                    onChange={(e) => updateEdu({...newEdu, field: e.target.value})} 
                    value={newEdu.field} className='modal-input'/>
                    <label className='modal-label'>Start year</label>
                    <input type="text" 
                    onChange={(e) => updateEdu({...newEdu, start: e.target.value})} 
                    value={newEdu.start} className='modal-input'/>
                    <label className='modal-label'>End year (Or expected)</label>
                    <input type="text" 
                    onChange={(e) => updateEdu({...newEdu, end: e.target.value})} 
                    value={newEdu.end} className='modal-input'/>
                    <label className='modal-label'>Grade:</label>
                    <input type="text" 
                    onChange={(e) => updateEdu({...newEdu, gpa: e.target.value})} 
                    value={newEdu.gpa} className='modal-input'/>
                    <label className='modal-label'>Description:</label>
                    <textarea 
                        onChange={(e) => updateEdu({ ...newEdu, description: e.target.value })} 
                        value={newEdu.description}
                        className='modal-input'>{newEdu.description}
                    </textarea>
                    <button type='button' 
                        onClick={() => handleSubmit()}
                        className='modal-submit'>Save
                    </button>
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