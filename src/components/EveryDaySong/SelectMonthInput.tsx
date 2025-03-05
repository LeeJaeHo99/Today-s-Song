'use client';

import { useState } from "react";
import { useSelectedDate } from "@/store/store";

export default function SelectMonthInput(){
    const { selectedDate, setSelectedDate } = useSelectedDate();
    
    const onChangeDate = (e) => {
        setSelectedDate(e.target.value);
    }

    return(
        <div className="select-month-input">
            <input value={selectedDate} onChange={onChangeDate} type="month" />
        </div>
    );
}