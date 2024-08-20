import { Flow } from '../../types/Flow';
import { Params } from '../../types/Params';

declare const ChatBotDrawer: ({ isOpenDrawer, getCurrPath, flow, params }: {
    isOpenDrawer: boolean;
    getCurrPath: () => keyof Flow | null;
    flow: Flow;
    params: Params;
}) => import("react/jsx-runtime").JSX.Element | undefined;
export default ChatBotDrawer;
