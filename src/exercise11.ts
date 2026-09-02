// This function logs a status message to a specified file, appending a timestamp to each entry using asynchronous file operations from the 'fs/promises' module.
export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const fs = await import('fs/promises');
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${statusMessage}\n`;

  await fs.appendFile(filePath, logEntry, 'utf-8');
}
