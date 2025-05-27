'use client';

import { useSelectedDate } from "@/store/store";

export default function SelectMonthInput(){
    const { selectedDate, setSelectedDate } = useSelectedDate();
    
    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    }

    return(
        <div className="select-month-input">
            <input className="blur-box" value={selectedDate} onChange={onChangeDate} type="month" />
        </div>
    );
}