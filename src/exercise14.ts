// Define the PostItem type with properties id, title, and body
export type PostItem = {
  id: number;
  title: string;
  body: string;
};

// Function to fetch a batch of post items by their ids from a remote API and return them as an array of PostItem objects
export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  // Create an array of promises for fetching each post item by its id
  const postPromises = postIds.map(async (postId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    // Check if the response is not ok (e.g., 404 Not Found), return null if response is not ok
    if (!response.ok) {
      return null;
    }
    const post = (await response.json()) as PostItem;
    return post;
  });

  // Use Promise.all to wait for all fetch requests to complete and filter out any null values from the results
  return (await Promise.all(postPromises)).filter(
    (post): post is PostItem => post !== null,
  );
}
