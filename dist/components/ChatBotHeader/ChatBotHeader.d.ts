
/**
 * Contains bot avatar, name, notifications, audio and close chat icon.
 *
 * @param notificationToggledOn boolean indicating if notification is toggled on
 * @param audioToggledOn boolean indicating if audio is toggled on
 * @param handleToggleNotification handles toggling of notification
 * @param handleToggleAudio handles toggling of audio
 */
declare const ChatBotHeader: ({ notificationToggledOn, audioToggledOn, handleToggleNotification, handleToggleAudio, handleToggleDrawer, drawerToggledOn }: {
    notificationToggledOn: boolean;
    audioToggledOn: boolean;
    drawerToggledOn: boolean;
    handleToggleNotification: () => void;
    handleToggleAudio: () => void;
    handleToggleDrawer: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default ChatBotHeader;
