// Export the EventMap type, with two events: 'launch' which expects a string payload, and 'shutdown' which expects a number payload
export type EventMap = {
  launch: string;
  shutdown: number;
};

// Define a generic SimpleEventEmitter class that can handle events defined in the EventMap type
export class SimpleEventEmitter<T extends EventMap> {
  // Private property to store listeners for each event type, where each event can have multiple callback functions
  private listeners: { [K in keyof T]?: Array<(data: T[K]) => void> } = {};
  
  // Method to register a callback function for a specific event type, ensuring type safety by using generics
  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  // Method to emit an event of a specific type, invoking all registered callback functions with the provided data
  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((callback) => callback(data));
    }
  }
}
