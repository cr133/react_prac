import React from 'react';
import { SkiDayRow } from './SkiDayRow';

export const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) =>
                <SkiDayRow key={i}
                            {...day}/>
                )}
        </tbody>
    </table>
)

SkiDayList.propTypes = {
    days: function(props) {
        if (!Array.isArray(props.days)) {
            return new Error("SkiDayList should be an array");
        } else if (!props.days.length) {
            return new Error("SkiDayList must have at least one record");
        } else {
            return null;
        }
    }
}