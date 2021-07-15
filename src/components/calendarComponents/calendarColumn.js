import React, { Component } from 'react';
import CalendarBlock from './calendarBlock';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'

    }
}

function borderStyle(type) {
    if (type === 'final') {
        return {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            borderRight: '2px solid black'
        }
    } else {
        return styles.container;
    }
};

function getTimes(data, time) {
    if (data.length) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === parseInt(time[0])) {
            
                return [true, 'first'];
            } else {
                if (data[i] === parseInt(time[1])) {
                    return [true, 'second'];
                }
            }
        }
    } else {
        return [false, 'null'];
    }
}

class CalendarColumn extends Component {
    render() {
        return (
            <div style={borderStyle(this.props.type)}>
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['1am', '2am'])} firstTime={'1am'} secondTime={'2am'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['3am', '4am'])} firstTime={'3am'} secondTime={'4am'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['5am', '6am'])} firstTime={'5am'} secondTime={'6am'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['7am', '8am'])} firstTime={'7am'} secondTime={'8am'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['9am', '10am'])} firstTime={'9am'} secondTime={'10am'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['11am', '12pm'])} firstTime={'11am'} secondTime={'12pm'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['1pm', '2pm'])} firstTime={'1pm'} secondTime={'2pm'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['3pm', '4pm'])} firstTime={'3pm'} secondTime={'4pm'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['5pm', '6pm'])} firstTime={'5pm'} secondTime={'6pm'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['7pm', '8pm'])} firstTime={'7pm'} secondTime={'8pm'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['9m', '10pm'])} firstTime={'9pm'} secondTime={'10pm'} />
                <CalendarBlock visible={getTimes(this.props.jobs.times, ['11pm', '12am'])} firstTime={'11pm'} secondTime={'12am'} />
            </div>
        )
    }
}

export default CalendarColumn;