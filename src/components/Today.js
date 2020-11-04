import React from 'react';


const Today = () => {

    const getToday = () => {
        const today = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
    
        return months[today.getMonth()] + ' ' + today.getDate();
    }

    return (
        <span class="date-text">{getToday()}</span>
    );
}

export default Today;