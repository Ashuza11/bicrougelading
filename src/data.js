// Data for the Llama 3 and GPT-3.5 metrics

export const llama3Data = {
  coherence: {
    average: 4.43,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 2 },
      { name: 'Score 4', value: 1 },
      { name: 'Score 5', value: 4 }
    ]
  },
  fluency: {
    average: 4.29,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 0 },
      { name: 'Score 4', value: 5 },
      { name: 'Score 5', value: 2 }
    ]
  },
  similarity: {
    average: 3.29,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 1 },
      { name: 'Score 3', value: 3 },
      { name: 'Score 4', value: 3 },
      { name: 'Score 5', value: 0 }
    ]
  }
};

export const gpt35Data = {
  coherence: {
    average: 4.71,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 1 },
      { name: 'Score 4', value: 0 },
      { name: 'Score 5', value: 6 }
    ]
  },
  fluency: {
    average: 4.57,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 1 },
      { name: 'Score 4', value: 1 },
      { name: 'Score 5', value: 5 }
    ]
  },
  similarity: {
    average: 3.43,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 3 },
      { name: 'Score 4', value: 4 },
      { name: 'Score 5', value: 0 }
    ]
  }
};

export const NEW_PALETTE_COLORS = [
  '#FFDCDC', // Score 1
  '#FFB2A7', // Score 2
  '#A7D9FF', // Score 3
  '#6A5ACD', // Score 4
  '#D42F2F'  // Score 5
];