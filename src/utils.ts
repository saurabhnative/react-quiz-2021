/**
 * Utility function to randomise answers array
 * @param array 
 * @returns 
 */
export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);