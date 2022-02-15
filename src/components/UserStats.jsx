import React from "react";
import {UserStats} from '../styles'

export default ({StatusName, StatusValue, icon, orientations})=> {
    return(
        <UserStats orientations={orientations}>
                                {icon}
                            <h3>{StatusName}</h3>
                            <h4>{StatusValue}</h4>
        </UserStats>
    )
}