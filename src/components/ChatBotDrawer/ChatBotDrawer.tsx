import React, { ReactNode} from 'react';
import "./ChatBotDrawer.css";
import { Flow } from '../../types/Flow';
import { Params } from '../../types/Params';


const ChatBotDrawer = ({
	isOpenDrawer,
	getCurrPath,
	flow,
	params
}:
{
	isOpenDrawer:boolean,
	getCurrPath: () => keyof Flow | null ;
	flow: Flow;
	params: Params;
	}) => {

	const currPath = getCurrPath();
	if (!currPath) {
		return;
	}
	const block = flow[currPath];

	// if path is invalid, nothing to process (i.e. becomes dead end!)
	if (!block) {
		return;
	}
	const renderItems =
    typeof block.renderDrawerItems === "function" ? block.renderDrawerItems(params) : block.renderDrawerItems;
	
	return (
		<div>			
			<div className={`rcb-chat-drawer-container ${isOpenDrawer == false ? 'open' : ""}`}>
				<div>
					{renderItems as ReactNode ? 
						renderItems as ReactNode : null		
					}
				</div>
			</div>
		</div>
	);
};

export default ChatBotDrawer;
