// Define the TodoItem type with properties userId, id, title, and completed
export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Function to fetch a todo item by its id from a remote API and return it as a TodoItem object
export async function fetchTodoSafe(todoId: number): Promise<TodoItem | null> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    // Check if the response is not ok (e.g., 404 Not Found), return null if response is not ok
    if (!response.ok) {
      return null;
    }
    const todo = (await response.json()) as TodoItem;
    return todo;
  } catch (error) {
    console.error('Error fetching todo:', error);
    return null;
  }
}
