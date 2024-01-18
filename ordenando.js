const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]]
  return array
}

const shuffle = (array, numSwaps) => {
  if (!Array.isArray(array) || !Number.isInteger(numSwaps) || numSwaps <= 0) {
    console.error("Parâmetros inválidos.");
    return;
  }

  for (let i = 0; i < numSwaps; i++) {
    const indexA = Math.floor(Math.random() * array.length);
    const indexB = Math.floor(Math.random() * array.length);
    swap(array, indexA, indexB);
  }

  return array;
};

const bubbleSort = (array) => {
  // Verifica se o vetor é válido
  if (!Array.isArray(array)) {
    console.error("Parâmetro inválido. Deve ser um vetor.");
    return;
  }

  const n = array.length;

  // Itera sobre o vetor
  for (let i = 0; i < n - 1; i++) {
    // Últimos i elementos estão no lugar certo
    for (let j = 0; j < n - 1 - i; j++) {
      // Troca se o elemento atual for maior que o próximo
      if (array[j] > array[j + 1]) {
        // Utiliza a função swap para trocar os elementos
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

const selectionSort = (array) => {
  // Verifica se o vetor é válido
  if (!Array.isArray(array)) {
    console.error("Parâmetro inválido. Deve ser um vetor.");
    return;
  }

  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // Encontra o índice do menor elemento no restante do vetor
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Troca o menor elemento com o elemento atual
    swap(array, i, minIndex);
  }

  return array;
};

const quickSort = (array, start = 0, end = array.length - 1) => {
  // Verifica se o vetor é válido
  if (!Array.isArray(array)) {
    console.error("Parâmetro inválido. Deve ser um vetor.");
    return;
  }

  if (start < end) {
    // Encontra o índice de partição
    const pivotIndex = partition(array, start, end);

    // Recursivamente ordena as sub-listas à esquerda e à direita do pivô
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }

  return array;
};

const partition = (array, start, end) => {
  // Escolhe o último elemento como pivô
  const pivot = array[end];

  // Índice do menor elemento
  let i = start - 1;

  for (let j = start; j < end; j++) {
    // Se o elemento atual é menor ou igual ao pivô, troca com o elemento na posição i
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }

  // Troca o pivô com o elemento na posição i + 1
  swap(array, i + 1, end);

  // Retorna o índice do pivô após as trocas
  return i + 1;
};