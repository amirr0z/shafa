import React from "react";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

export default function Service() {
    const StaffCard = (props) => (
        <div className="flex flex-col min-w-56 border rounded-xl border-zinc-600 items-center h-min">
            <span className="border-zinc-600 border-b w-full text-center p-1">
                دکتر اکبری
            </span>
            <span>از ۱۰ صبح</span>
            <span>تا ۵ عصر</span>
        </div>
    );

    const ReserveCard = (props) => (
        <div className="flex flex-col min-w-56 border rounded-xl border-zinc-600 items-center h-min">
            <span className="border-zinc-600 border-b w-full text-center p-1">
                {props.name ? props.name : "---"}
            </span>
            <span>از {props.from} </span>
            <span>تا {props.to} </span>
        </div>
    );

    return (
        <div className="flex flex-col w-full flex-grow items-center justify-center gap-6">
            <div className="flex xl:flex-row flex-col justify-between gap-6 w-full xl:items-stretch items-center">
                <Calendar
                    shouldHighlightWeekends
                    calendarClassName=" bg-white/5 backdrop-blur-sm"
                    locale="fa"
                />
                <div className="bg-white/5 backdrop-blur-sm flex-grow min-h-full rounded-xl overflow-hidden flex flex-wrap items-start justify-center gap-6 p-6">
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm w-full rounded-xl overflow-hidden flex flex-wrap items-start justify-center gap-6 p-6">
                <ReserveCard name="آقای محمدی" from="10" to="11" />
                <ReserveCard from="11" to="12" />
                <ReserveCard name="آقای محمدی" from="12" to="13" />
                <ReserveCard from="13" to="14" />
            </div>
        </div>
    );
}
