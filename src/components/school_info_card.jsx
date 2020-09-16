import React from 'react';

class SchoolInfoCard extends React.Component {
    render() {
        const { school } = this.props;
        return(
            <div className='edu-info-card'>
                <h2 className='edu-card-title'>{school.degree} {school.field} @ {school.name}</h2>
                <p className='edu-details'>{school.start} - {school.end}</p>
                <p className='edu-details'>Grade: {school.gpa}</p>
                <p className='edu-details'>{school.description}</p>
            </div>
        )
    }
}

export default SchoolInfoCard;