import SockJS from 'sockjs-client';
import { SOCKET_API_URL } from '@/configurations';

export const socket = new SockJS(`${SOCKET_API_URL as string}ws-stomp/`);

//  http://34.16.48.178/
