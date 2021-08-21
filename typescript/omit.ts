// Constructs a type by picking all properties from Type and then removing Keys

interface TodoProps {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

const todo: Omit<TodoProps, "description"> = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};

const anotherTodo: Omit<TodoProps, "description" | "completed"> = {
    title: "Clean kitchen",
    createdAt: 1615544252770
}
