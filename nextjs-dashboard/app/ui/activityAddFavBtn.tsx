import { useActivityAddFavShowContext } from "../contexts/activityAddFavContext";

export default function ActivityAddFavBtn() {

	const { activityAddFavShow } = useActivityAddFavShowContext();	

	return (
		<>
		{
			( activityAddFavShow ) ? <button className="fixed bottom-3 right-1 w-12 h-12 bg-sal bg-blue-400 hover:bg-blue-600 text-black rounded-full shadow-lg flex items-center justify-center text-2xl"
			onClick={()=> { alert( 'Nothing Active' ); } }> + </button>
			: <></>
		}
		</>
	);
};