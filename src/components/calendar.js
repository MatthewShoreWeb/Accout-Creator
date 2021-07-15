import React, { Component } from 'react';
import CalendarColumn from './calendarComponents/calendarColumn';
import CalendarHeader from './calendarComponents/CalendarHeader';

const styles = {
   calendar: {
      display: 'block',
      color: 'white',
      width: '80vw',
      height: '80vh',
      margin: 'auto',
      borderRadius: '30px',
      padding: '20px'
   },
   header: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
   },
   headerComponent: {
      textAlign: 'center',
      backgroundColor: '#03a5fc',
      height: '10%',
      width: '20%',
      borderLeft: 'solid 2px #026ba3',
      borderTop: 'solid 2px #026ba3',
      borderBottom: 'solid 2px #026ba3',
      display: 'flex',
   },
   calendarContent: {
      display: 'flex',
      flexDirection: 'row'
   },
   dateText: {
      fontSize: '15px',
      marginLeft: '5px'
   },
   dayTitle: {
      marginLeft: 'auto',
      marginRight: 'auto'
   }
};

class Calendar extends Component {
   render() {
      return (
         <div style={styles.calendar}>
            <CalendarHeader month={'July'}/>
            <div style={styles.header}>
               <div class='headerComponent' style={styles.headerComponent}>
                  <span style={styles.dateText}>20</span> <h3 style={styles.dayTitle}>Monday</h3>
               </div>
               <div class='headerComponent' style={styles.headerComponent}>
                  <span style={styles.dateText}>21</span> <h3 style={styles.dayTitle}>Tuesday</h3>
               </div>
               <div class='headerComponent' style={styles.headerComponent}>
                  <span style={styles.dateText}>22</span> <h3 style={styles.dayTitle}>Wednesday</h3>
               </div>
               <div class='headerComponent' style={styles.headerComponent}>
                  <span style={styles.dateText}>23</span> <h3 style={styles.dayTitle}>Thursday</h3>
               </div>
               <div class='headerComponent' style={styles.headerComponent}>
                  <span style={styles.dateText}>24</span> <h3 style={styles.dayTitle}>Friday</h3>
               </div>
               <div class='headerComponent' style={styles.headerComponent}>
                  <span style={styles.dateText}>25</span> <h3 style={styles.dayTitle}>Saturday</h3>
               </div>
               <div class='headerComponent' style={styles.headerComponent}>
                  <p style={styles.dateText}>26</p> <h3 style={styles.dayTitle}>Sunday</h3>
               </div>
            </div>

            <div style={styles.calendarContent}>
                  <CalendarColumn jobs={{times: [3, 4, 8]}} type={'nonfinal'}/>
                  <CalendarColumn jobs={{times: [6, 8, 10]}} type={'nonfinal'}/>
                  <CalendarColumn jobs={{times: []}}type={'nonfinal'}/>
                  <CalendarColumn jobs={{times: []}} type={'nonfinal'}/>
                  <CalendarColumn jobs={{times: []}} type={'nonfinal'}/>
                  <CalendarColumn jobs={{times: [5, 1, 12]}} type={'nonfinal'}/>
                  <CalendarColumn jobs={{times: []}} type={'final'}/>
            </div>
              
         </div>
      )
   }
}

export default Calendar;