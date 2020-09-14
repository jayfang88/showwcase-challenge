import React from 'react';

class SchoolInfoCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { school } = this.props;
        return(
            <div className='school-info-card'>
                <p>{school.name}</p>
                <p>{school.degree}, {school.field}</p>
            </div>
        )
    }
}

export default SchoolInfoCard;