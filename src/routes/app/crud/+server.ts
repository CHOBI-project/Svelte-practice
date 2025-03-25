import * as messageDB from "$appRoutes/crud/database";
import {json, type RequestEvent} from "@sveltejs/kit";

export async function GET() {
  const data = messageDB.getChatMessages();
  return json(data, {status: 201});
}

export async function POST(requestEvent: RequestEvent) {
  const value = await requestEvent.request.json();
  
  messageDB.createChatMessage(value);
  const data = messageDB.getChatMessages();
  
  return json(data, {status: 201})
}

export async function PUT(requestEvent: RequestEvent) {
  const requests = await requestEvent.request.json();
  console.log(requests.id, requests.message);
  messageDB.editChatMessage(requests.id, requests.message);
  const data = messageDB.getChatMessages();
  
  return json(data, {status: 201});
}

export async function DELETE(requestEvent: RequestEvent) {
  const deleteId = await requestEvent.request.json();
  messageDB.deleteChatMessage(deleteId);
  const data = messageDB.getChatMessages();
  
  return json(data, {status: 201})
}