import { ChangeEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Need to import this lib so that the calendar is showed  properly

interface DateFieldType {
    id: string;
    disabled: boolean;
    handleOnChange: (date: Date | null) => void;
    value: Date;
} 

export default function DateField({id = "", disabled = false, handleOnChange = (date) => { }, value = new Date()}: DateFieldType) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(value);

    const handelOnChange = ( date: Date | null) => {
        setSelectedDate(date);
        // if( date != null ) {
        //     e.target.value = date.toISOString();
        // }
        // else {
        //     e.target.value = "";
        // }
        
        if( handleOnChange ) {
            handleOnChange(date);
        }
    }

    return (
        <DatePicker
            disabled={disabled}
            // style={{width: "100%"}}
            className={`custom-datepicker`}
            selected={selectedDate}
            onChange={(date, e) => handelOnChange(date)}
            dateFormat="yyyy-MM-dd"
        />
    );
};
