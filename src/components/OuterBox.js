import React from 'react';



const OuterBox = ({ room }) => (
    <div className="OuterBox">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src="https://www.iconsdb.com/icons/preview/orange/online-xxl.png" alt="online icon" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img className="close-img" src="https://www.iconsdb.com/icons/preview/orange/close-window-xxl.png" alt="close icon" /></a>
        </div>
    </div>
);

export default OuterBox;