import { RequiresAuth } from '@utils';

const ChatsPagePure: React.FC = () => {
	return <p> Successfully logged in!</p>;
};

export const ChatsPage = () => <RequiresAuth component={<ChatsPagePure />} />;
