// Define a type for network configuration with serverUrl and port properties
export type NetworkConfig = {
  serverUrl: string;
  port: number;
};

// Define a type for environment configuration with environment and timeout properties
export type EnvironmentConfig = {
  environment: "dev" | "prod";
  timeout: number;
};

// Define an intersection type AppConfig that combines NetworkConfig and EnvironmentConfig
export type AppConfig = NetworkConfig & EnvironmentConfig;

// Function to initialize the application configuration with default values and user overrides
export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  return {
    serverUrl: "http://localhost",
    port: 8080,
    environment: "dev",
    timeout: 3000,
    ...userOverrides
  };
}
