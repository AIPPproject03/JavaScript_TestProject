function fibonacci(n) {
  if (n === 0) {
    return "0";
  } else if (n === 1) {
    return "0, 1";
  }

  const fibSeq = fibonacci(n - 1)
    .split(", ")
    .map(Number);

  const nextElement = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
  fibSeq.push(nextElement);

  return fibSeq.join(", ");
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
