import ActivityAddFavBtn from "./activityAddFavBtn";
import ActivityCard from "./activityCard";

export default function ClientActivities( { activities }: { activities: Array<any> }) {

	return (
		<>
			<div className="divClientActivityList h-full overflow-y-auto">
				{ activities.map( (activity, index) => (
					<ActivityCard activity={activity} key={index}></ActivityCard>
				))}
			</div>
			<ActivityAddFavBtn></ActivityAddFavBtn>
		</>
	);
};