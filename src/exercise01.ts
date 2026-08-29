// Function to format a name in the format "LastName, FirstName M." where M is the middle initial if provided
export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  // Check if a middle name is provided and not empty.
  if(middleName !== undefined && middleName !== null && middleName !== '') {
    // Return the formatted name with the middle initial.
    return `${lastName}, ${firstName}` + ' ' + `${middleName.charAt(0)}` + '.';
  }
  else {
    // Return the formatted name without the middle initial.
    return `${lastName}, ${firstName}`;
  }
}
