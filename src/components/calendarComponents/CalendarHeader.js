import React, { Component } from 'react';


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#03a5fc',
        // border: 'black 2px solid',
        width: '100%',
        height: '7.5%',
        textAlign: 'center'
    },
    displayOptionsButton: {
        verticalAlign: 'middle',
        backgroundColor: '#0cc8ed',
        height: '70%',
        marginTop: 'auto',
        marginBottom: 'auto',  
        marginRight: '1%',   
        width: '10%',
        borderRadius: '15px',
        border: '3px solid #026ba3'
    },
    optionsButtonText: {
        marginTop: '5%',
        marginBottom: '5%',
        fontWeight: 'bold'
    }
 
};

class CalendarHeader extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.titleContainer}>
                    <h1 >{this.props.month}</h1>
                </div>
               
                <div style={styles.displayOptionsButton}>
                    <p style={styles.optionsButtonText}>Week</p>
                </div>




            </div>
        )
    }
}

export default CalendarHeader;