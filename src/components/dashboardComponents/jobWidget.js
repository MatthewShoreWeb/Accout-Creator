import React, { Component } from 'react';

function widgetSettings() {
    
};

const styles = {
    jobWiget: {
        margin: 'auto',
        height: '300px',
        width: '200px',
        backgroundColor: 'blue'
    },
    widgetHeader: {
        width: '100%',
        height: '10%',
        backgroundColor: 'green',
        
    },
    jobWidgetFilter: {
        width: '20%',
        height: '100%',
        backgroundColor: 'red',
        textAlign: 'center'
    }
}

class JobWidget extends Component {    
    render () {
        return (
            <div style={styles.jobWiget}>
                <div id='widgetHeader' style={styles.widgetHeader}>
                    <div id='jobWidgetFilter' style={styles.jobWidgetFilter} onClick={widgetSettings}>
                        <p>⚙️</p>
                    </div>
                    <div id='widgetTitle'>
                        <h4>Job List</h4>
                    </div>
                </div>

            </div>
        )
    }

}

export default JobWidget;