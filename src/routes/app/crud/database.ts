export type MessageModel = {
  id: string;
  message: string;
  edit: boolean;
}

const chatDatabase: MessageModel[] = [];

export function getChatMessages() {
  return chatDatabase;
}

export function createChatMessage(message: string) {
  if (!message) return;
  
  chatDatabase.push({
    id: crypto.randomUUID(),
    message: message,
    edit: false
  });
}

export function editChatMessage(id: string, editMessage: string) {
  const target = chatDatabase.find((chat) => chat.id === id);
  if (!target) return;
  
  target.message = editMessage;
  target.edit = false;
}

export function deleteChatMessage(id: string) {
  const index = chatDatabase.findIndex((chat) => chat.id === id);
  chatDatabase.splice(index, 1);
}