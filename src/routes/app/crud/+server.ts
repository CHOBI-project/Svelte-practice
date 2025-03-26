import * as chatDB from "$appRoutes/crud/chatDB";
import { type RequestEvent, json } from "@sveltejs/kit";

export async function GET() {
	const data = chatDB.getChatMessages();
	console.log(data);

	return json(data, { status: 200 });
}

export async function POST(requestEvent: RequestEvent) {
	const value = await requestEvent.request.json();
	chatDB.createChatMessage(value);

	const data = chatDB.getChatMessages();
	console.log(data);

	return json(data, { status: 201 });
}

export async function PUT(requestEvent: RequestEvent) {
	const requests = await requestEvent.request.json();
	chatDB.editChatMessage(requests.id, requests.message);

	const data = chatDB.getChatMessages();
	console.log(data);

	return json(data, { status: 200 });
}

export async function DELETE(requestEvent: RequestEvent) {
	const deleteId = await requestEvent.request.json();
	chatDB.deleteChatMessage(deleteId);

	const data = chatDB.getChatMessages();
	console.log(data);

	return json(data, { status: 200 });
}
