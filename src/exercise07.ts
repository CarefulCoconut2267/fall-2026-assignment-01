// Import the 'fs' module from Node.js to perform synchronous file system I/O operations
import * as fs from 'node:fs';

// Define a type for the gradebook structure, where each student has a record of subjects and their corresponding grades
export type Gradebook = {
  [student: string]: {
    [subject: string]: number;
  };
};

// Function to calculate the average grade for a specific subject across all students in the gradebook
export function calculateSubjectAverage(subject: string): number {
  // Read the gradebook data from a JSON file and parse it into a Gradebook object
  const data = fs.readFileSync('data/gradebook.json', 'utf-8');
  const gradebook: Gradebook = JSON.parse(data);

  // Initialize variables to keep track of the total grades and the count of students who have a grade for the specified subject
  let total = 0;
  let count = 0;
  
  // Iterate over each student in the gradebook to accumulate grades for the specified subject
  for (const student in gradebook) {
    if (gradebook[student][subject]) {
      total += gradebook[student][subject];
      count++;
    }
  }
  
  // Calculate and return the average grade for the specified subject, ensuring to handle the case where no students have a grade for that subject
  return count > 0 ? total / count : 0;
}
