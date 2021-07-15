import React, { Component } from 'react';

const styles = {
    container: {
        backgroundColor: '#03a5fc',
        borderRadius: '15px',
        width: '60%',
        display: 'block',
        marginRight: '5px',
        marginTop: 'auto',
        marginBottom: 'auto',
        height: '90%'
    },
    text: {
        fontSize: '13px',
        margin: 'auto',
        textAlign: 'center'
        
    }
};

function hidden(type) {
    if (type) {
        return styles.container;
    } else {
        return {
            display: 'none'
        }
    }
};

class CalendarJob extends Component {
    render() {
        return (
            <div style={hidden(this.props.visible)}>
                <p style={styles.text}>{this.props.time}{this.props.detail}</p>
            </div>
        )
    }
 }
 
 export default CalendarJob;