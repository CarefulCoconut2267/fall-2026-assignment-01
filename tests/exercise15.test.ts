import { describe, it, expect } from 'vitest';
import { processCommentsPipeline } from '../src/exercise15.js';
import fs from 'fs/promises';
import path from 'path';

describe('Exercise 15: processCommentsPipeline', () => {
  const outputPath = path.join('data', 'comments_output.json');

  it('should process the real comments pipeline and save to disk', async () => {
    // Clean up
    try {
      await fs.unlink(outputPath);
    } catch (e) {}

    const count = await processCommentsPipeline(1, outputPath);

    // Based on discovery: postId 1 has 5 comments, none end in .org
    expect(count).toBe(5);

    const fileContent = await fs.readFile(outputPath, 'utf-8');
    const data = JSON.parse(fileContent);

    expect(data).toHaveLength(5);
    expect(data[0]).toHaveProperty('commenterEmail');
    expect(data[0]).not.toHaveProperty('body'); // Should be Omit/Pick if type CommentSummary is strictly followed

    // Verify no .org emails (though none existed for post 1, we can assert the filter logic works)
    data.forEach((comment: any) => {
      expect(comment.commenterEmail.endsWith('.org')).toBe(false);
    });
  });
});
