// action
export const increaseCount = (input: number) => {
	return {
		type: 'increase',
		payload: input
	}
}
