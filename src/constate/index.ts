import {UserDataProvider} from './userData';
import {ListProvider} from './usersList';

export const providers = [ListProvider, UserDataProvider];

export {useList} from './usersList';
export {useUserData} from './userData';
