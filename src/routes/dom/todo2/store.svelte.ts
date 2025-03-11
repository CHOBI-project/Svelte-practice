type Todo = {
  id: string;
  title: string;
  done: boolean;
}

export const todos = $state<Todo[]>([]);