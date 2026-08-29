// Custom error class for DNA transcription errors.
class DNAError extends Error {
  // Constructor for the DNAError class.   
  constructor(message: string) {
    // Call the parent class (Error) constructor with the message.
    super(message);
    // Set the name property of the error to "DNAError" for identification in error handling and logging.
    this.name = "DNAError";
    // Set the prototype of the error to DNAError.prototype for proper inheritance.
    Object.setPrototypeOf(this, DNAError.prototype);
  }
}

// Function to transcribe a DNA string into an RNA string. It takes a string of DNA nucleotides (A, T, C, G) and returns the corresponding RNA string (U, A, G, C). 
// If an invalid nucleotide is found, it throws a DNAError.
export function transcribeDNA(dna: string): string {
  // Initialize an empty string to hold the resulting RNA sequence.
  let rna : string = '';
  for (const char of dna) {
    // Check if the character is a valid DNA nucleotide. If not, throw a DNAError with a descriptive message.
    if (char !== 'A' && char !== 'T' && char !== 'C' && char !== 'G') {
      throw new DNAError("Invalid DNA nucleotide found: " + char);
    }
    // Transcribe the DNA nucleotide to its corresponding RNA nucleotide.
    else if(char === 'A') {
      rna += 'U';
    }
    else if(char === 'T') {
      rna += 'A';
    }
    else if(char === 'C') {
      rna += 'G';
    }
    else if(char === 'G') {
      rna += 'C';
    }
  }
  return rna;
}
