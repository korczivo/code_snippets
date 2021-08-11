// Constructs a type by picking the set of properties Keys
// Very useful when you want to get for example one key from huge interface

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
