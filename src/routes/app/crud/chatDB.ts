export type ChatModel = {
  id: string;
  message: string;
  edit: boolean;
}

const chatDB: ChatModel[] = [];

export function getChatMessages() {
  return chatDB;
}

export function createChatMessage(message: string) {
  if (!message) return;
  
  chatDB.push({
    id: crypto.randomUUID(),
    message: message,
    edit: false
  });
}

export function editChatMessage(id: string, editMessage: string) {
  const target = chatDB.find((chat) => chat.id === id);
  if (!target) return;
  
  target.message = editMessage;
  target.edit = false;
}

export function deleteChatMessage(id: string) {
  const index = chatDB.findIndex((chat) => chat.id === id);
  chatDB.splice(index, 1);
}