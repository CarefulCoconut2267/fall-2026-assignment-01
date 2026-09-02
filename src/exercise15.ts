// Import the 'fs/promises' module from Node.js to perform asynchronous file system I/O operations
import fs from 'fs/promises';

// Define a type for the summary of a comment, including the postId, id, and commenterEmail
export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

// Function to fetch comments for a specific postId from a remote API, filter out comments with emails ending in '.org', and write the filtered comments to a specified output file on the disk.
export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  // Fetch comments for the specified postId from the remote API
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );

  // Check if the response is not ok (e.g., 404 Not Found), throw an error if response is not ok
  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post ${targetPostId}`);
  }

  // Parse the response JSON into an array of comment objects with properties postId, id, email, body, and name
  const data = (await response.json()) as Array<{
    postId: number;
    id: number;
    email: string;
    body: string;
    name: string;
  }>;
  
  // Filter out comments with emails ending in '.org' and map the remaining comments to the CommentSummary type
  const filteredComments: CommentSummary[] = data
    .filter((comment) => !comment.email.endsWith('.org'))
    .map((comment) => ({
      postId: comment.postId,
      id: comment.id,
      commenterEmail: comment.email,
    }));

  // Write the filtered comments to the specified output file in JSON format with indentation for readability
  await fs.writeFile(outputPath, JSON.stringify(filteredComments, null, 2), 'utf-8');

  // Return the number of filtered comments that were written to the output file
  return filteredComments.length;
}
