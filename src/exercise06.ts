// Define a generic Stack (FIFO) class that can hold items of any type T
export class Stack<T> {
  // Internal array to hold the stack items
  public items: T[] = [];
  
  // Method to add an item to the top of the stack
  public push(item: T): void {
    this.items.push(item);
  }

  // Method to remove and return the item from the top of the stack
  public pop(): T | undefined {
    return this.items.pop();
  }

  // Method to return the item at the top of the stack without removing it
  public peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Method to check the size of the stack
  public size(): number {
    return this.items.length;
  }
}
