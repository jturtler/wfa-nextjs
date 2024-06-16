"use client";

import * as Utils from "@/app/lib/utils";
import { useState } from "react";
import ActivityForm from "./ActivityForm";
import { JSONObject } from "../lib/definitions";

export default function ActivityList({client, handleOnUpdated}: {client: JSONObject, handleOnUpdated: () => void}) {
    
    const list = client.activities;
    const [selectedActivity, setSelectedActivity] = useState<JSONObject | null>(null);
   
    return (
        <div className="divMainList m-1 grid h-[calc(100vh-110px)] flex-1 content-start gap-1 overflow-x-auto border-2 p-3 border-gray-300 md:grid-cols-2 rounded-lg">
            {selectedActivity == null && list && list.length > 0 && list.map((t: JSONObject) => (
                <div 
                    key={`${t.id}`} 
                    onClick={(e) => setSelectedActivity(t)}
                    className="cursor-pointer p-3 border bg-white border-slate-300 my-3 flex justify-between items-start rounded">
                    <div className="flex flex-row">
                        <div className="mx-2">
                            <div className="font-bold">{t.program}</div>
                            <div>{t.note}</div>
                            <div>{Utils.formatDate(new Date(t.date))}</div>
                        </div>
                    </div>
                </div>
            ))}

            {(selectedActivity == null && !list || list.length == 0 ) && <span className="text-red-600">[No any activity]</span>}
        
            {selectedActivity != null && <ActivityForm client={client} activity = {selectedActivity} handleOnUpdated={() => handleOnUpdated()} handleOnClose={() => setSelectedActivity(null)}
            />}
        </div>
    )
}