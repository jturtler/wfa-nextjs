export default function ClientActivities( { activities }: { activities: Array<any> }) {

	return (
		<>
			<div>Activities: </div>
			<div>{activities?.length} </div>
			</>
	);
};