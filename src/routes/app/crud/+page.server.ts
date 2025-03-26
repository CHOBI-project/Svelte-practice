import * as chatDB from "$appRoutes/crud/chatDB";

export function load() {
  const data = chatDB.getChatMessages() || [];
  
  return {
    chatDataBase: data,
  };
}