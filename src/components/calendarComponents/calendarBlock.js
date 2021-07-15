import React, { Component } from 'react';
import CalendarJob from './CalendarJob';

const styles = {
    container: {
        borderLeft: 'solid black 2px',
        borderBottom: 'solid black 2px',
        width: '99%',
        height: '50px',
        backgroundColor: 'white'
    },
    smallText: {
        color: 'black',
        fontSize: '10px',
        width: '10px'
    },
    firstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50%',
        width: '100%',
        borderBottom: '1px lightgrey solid'
    },
    secondSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50%',
        width: '100%',
    }
};

function visible(data, type) {
    if (data) {

        if (data[0] === true) {
            if (data[1] === type) {
                return true
            } else {
                return false;
            }
        }
    }
    return false;
}



class CalendarBlock extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.firstSection}>
                    <p style={styles.smallText}>{this.props.firstTime}</p>
                    <CalendarJob detail={'{time} {description}' } visible={visible(this.props.visible, 'first')} />

                </div>

                <div style={styles.secondSection}>
                    <p style={styles.smallText}>{this.props.secondTime}</p>
                    <CalendarJob detail={'{time} {description}' } visible={visible(this.props.visible, 'second')} />
                </div>

                <p></p>
            </div>
        )
    }
}

export default CalendarBlock;