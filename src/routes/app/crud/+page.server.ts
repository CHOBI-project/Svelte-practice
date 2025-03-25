import * as crudDB from "$appRoutes/crud/database";

export function load() {
  const data = crudDB.getChatMessages() || [];
  
  return {
    chatDataBase: data,
  };
}