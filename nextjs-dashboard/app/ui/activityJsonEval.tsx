import JsonView from "@uiw/react-json-view";
import { useRef, useState } from "react";
import { Button } from "./button";

export default function ActivityJsonEval( { activity }: { activity: any } )
{
	var expressionInitStr = "var outJson = { 'date': activity.date, 'processing': activity.processing, 'transactions': activity.transactions };	outJson; ";
	const [expressStr, setExpressStr] = useState<string>( expressionInitStr );
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const btnExpressRunClick = () => {
		if ( textareaRef !== null ) setExpressStr( textareaRef?.current?.value || ''  );
	};

	const evalActivity = () => {
		return eval( expressStr );
	};

	return ( 
		<>
			<div>
				<div>
					<textarea name="express" defaultValue={expressStr} ref={textareaRef} rows={4} cols={40} />
				</div>
				<div>
					<Button className="flex-1 justify-center mx-5" onClick={btnExpressRunClick}>
						Run
					</Button>
				</div>
			</div>
			<div className="mt-5">
				<div><JsonView value={ evalActivity() } collapsed={true} /></div>
			</div>
		</> 
	);
};