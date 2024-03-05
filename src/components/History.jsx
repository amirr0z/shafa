import React from "react";

export default function History() {
    const HistoryCar = (props) => (
        <div className="flex flex-col min-w-56 border rounded-xl border-zinc-600 items-center h-min">
            <span className="border-b border-zinc-600 w-full text-center p-1">
                دکتر اکبری
            </span>
            <span className="border-b border-zinc-600 w-full text-center p-1">
                پوست
            </span>
            <span className="border-b border-zinc-600 w-full text-center p-1">
                ۱۴۰۲/۲/۲
            </span>
            <span>از ۱۰ صبح</span>
            <span>تا 11 صبح</span>
        </div>
    );
    return (
        <div className="flex flex-wrap gap-6">
            <HistoryCar />
            <HistoryCar />
            <HistoryCar />
            <HistoryCar />
            <HistoryCar />
            <HistoryCar />
        </div>
    );
}
