type ClientSendMessage = {
  room: string;
  message: string;
};

export interface ClientToServerEvents {
  join_room: (data: string) => void;
  send_message: (data: ClientSendMessage) => void;
  receive_message: never;
}
