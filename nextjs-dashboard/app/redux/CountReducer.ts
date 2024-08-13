
const initState = {
	count : 0
}
const CountReducer = (state = initState, action: any) => {

	if( action.type == "increase" ) {
		state.count = action.payload + 1;
		//state.count++;
	}

	return state;
}

export default CountReducer;