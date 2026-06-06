export type NetworkConfig = {};

export type EnvironmentConfig = {};

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  return {};
}
