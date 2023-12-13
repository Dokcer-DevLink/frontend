import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { SOCKET_API_URL } from '@/configurations';

const SockJs = new SockJS(SOCKET_API_URL, { cors: { origin: '*' } });

export const StompClient = Stomp.over(SockJs);
