import { useClientAddFavShowContext } from "../contexts/clientAddFavContext";

export default function ClientAddFavBtn() {

	const { clientAddFavShow } = useClientAddFavShowContext();	

	return (
		<>
		{
			( clientAddFavShow ) ? <button className="fixed bottom-3 right-1 w-12 h-12 bg-sal bg-orange-400 hover:bg-orange-600 text-black rounded-full shadow-lg flex items-center justify-center text-2xl"
			onClick={()=> { alert( 'Nothing Active' ); } }> + </button>
			: <></>
		}
		</>
	);
};