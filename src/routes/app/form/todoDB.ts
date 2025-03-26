export type TodoDatabase = {
	id: string;
	desc: string;
	done: boolean;
};

const todoDB: Map<string, TodoDatabase[]> = new Map();

export function getTodos(userId: string) {
	if (!todoDB.get(userId)) {
		todoDB.set(userId, [
			{
				id: crypto.randomUUID(),
				desc: "svelteの勉強",
				done: false,
			},
		]);
	}

	return todoDB.get(userId);
}

export function createTodo(userId: string, input: FormDataEntryValue) {
	if (input.toString().trim() === "") {
		throw new Error("!todoを入力してください");
	}
	const todos = todoDB.get(userId) || [];

	if (todos.find((todo) => todo.desc === input)) {
		throw new Error("!todoが被ってます");
	}
	todos.push({ id: crypto.randomUUID(), desc: input.toString(), done: false });
}

export function deleteTodo(userId: string, todoId: FormDataEntryValue) {
	const todos = todoDB.get(userId) || [];
	const index = todos.findIndex((todo) => todo.id === todoId);
	if (index !== -1) {
		todos.splice(index, 1);
	}
}
