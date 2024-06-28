import ActivityCard from "./activityCard";

export default function ClientActivities( { activities }: { activities: Array<any> }) {

	return (
		<>
			<div className="divClientActivityList h-full overflow-y-auto">
				{ activities.map( (activity, index) => (
					<ActivityCard activity={activity} key={index}></ActivityCard>
				))}
			</div>
			<button className="fixed bottom-3 right-1 w-12 h-12 bg-sal bg-blue-400 hover:bg-blue-600 text-black rounded-full shadow-lg flex items-center justify-center text-2xl"
                onClick={()=> {} }> + </button>			
		</>
	);
};