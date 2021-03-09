import React from 'react';
import cssStyles from '../Popups/WarningEmptyCell.module.css';

const warningEmptyCell = (props) => (
    <div className={cssStyles.popup}  onClick={props.handleClose} style={{ position: 'absolute',left: '50%', top:'50%'}}>
        <span className={cssStyles.popuptext}>Warning!!! Pick number from number field below!</span>
    </div>
); 

export default warningEmptyCell;