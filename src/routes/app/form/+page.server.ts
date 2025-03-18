import * as db from "$appRoutes/form/todoDB";
import { type Cookies, fail } from "@sveltejs/kit";

export function load({cookies}: { cookies: Cookies }) {
  let id = cookies.get("userId");
  if (!id) {
    id = crypto.randomUUID();
    cookies.set("userId", id, {path: "/"});
  }
  
  const data = db.getTodos(id) || [];
  
  return {
    todos: data
  }
}

export const actions = {
  create: async ({cookies, request}) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
    
    const data = await request.formData();
    const userId = cookies.get("userId");
    const desc = data.get("desc");
    
    if (!userId || !desc) return;
    console.log("create....." + `userId: ${userId}`, `todo: ${desc}`);
    
    try {
      db.createTodo(userId, desc)
    } catch (error) {
      if (error instanceof Error) {
        //propsの{ form }で取得可能
        return fail(422, {
          description: data.get("desc"),
          error: error.message,
        });
      }
    }
  },
  
  delete: async ({cookies, request}) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
    
    const data = await request.formData();
    const userId = cookies.get("userId");
    const todoId = data.get("id");
    
    if (!userId || !todoId) return;
    console.log("delete....." + `userId: ${userId}`, `todoId: ${todoId}`);
    
    db.deleteTodo(userId, todoId);
  },
}