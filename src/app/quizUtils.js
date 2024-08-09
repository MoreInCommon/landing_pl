const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export function calculateResult1(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute each EXP term separately
  const term1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  const term2 = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  const term3 = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  const term4 = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  const term5 = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  const term6 = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Combine the terms as in the original formula
  const result = 1 / (1 + term1 + term2 + term3 + term4 + term5 + term6);

  return roundToTwo(result);
}

export function calculateResult2(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute the first EXP term separately (it appears in both numerator and denominator)
  const expTerm1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  // Compute the remaining EXP terms for the denominator
  const expTerm2 = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  const expTerm3 = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  const expTerm4 = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  const expTerm5 = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  const expTerm6 = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Compute the numerator (which is just expTerm1)
  const numerator = expTerm1;

  // Compute the denominator, which is 1 + expTerm1 + all the other expTerms
  const denominator = 1 + expTerm1 + expTerm2 + expTerm3 + expTerm4 + expTerm5 + expTerm6;

  // Calculate the final result as the fraction of numerator/denominator
  const result = numerator / denominator;

  return roundToTwo(result);
}
export function calculateResult3(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute the first EXP term separately for the numerator
  const numeratorExpTerm = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  // Compute the other EXP terms for the denominator
  const expTerm1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  const expTerm2 = numeratorExpTerm; // This term is the same as the numerator

  const expTerm3 = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  const expTerm4 = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  const expTerm5 = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  const expTerm6 = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Compute the numerator
  const numerator = numeratorExpTerm;

  // Compute the denominator, which is 1 + expTerm1 + expTerm2 + all the other expTerms
  const denominator = 1 + expTerm1 + expTerm2 + expTerm3 + expTerm4 + expTerm5 + expTerm6;

  // Calculate the final result as the fraction of numerator/denominator
  const result = numerator / denominator;

  return roundToTwo(result);
}
export function calculateResult4(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute the exponential term for the numerator
  const numeratorExpTerm = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  // Compute the other exponential terms for the denominator
  const expTerm1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  const expTerm2 = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  const expTerm3 = numeratorExpTerm; // This term is the same as the numerator

  const expTerm4 = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  const expTerm5 = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  const expTerm6 = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Compute the numerator
  const numerator = numeratorExpTerm;

  // Compute the denominator, which is 1 + expTerm1 + expTerm2 + all the other expTerms
  const denominator = 1 + expTerm1 + expTerm2 + expTerm3 + expTerm4 + expTerm5 + expTerm6;

  // Calculate the final result as the fraction of numerator/denominator
  const result = numerator / denominator;

  return roundToTwo(result);
}
export function calculateResult5(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute the exponential term for the numerator
  const numeratorExpTerm = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  // Compute the other exponential terms for the denominator
  const expTerm1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  const expTerm2 = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  const expTerm3 = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  const expTerm4 = numeratorExpTerm; // This term is the same as the numerator

  const expTerm5 = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  const expTerm6 = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Compute the numerator
  const numerator = numeratorExpTerm;

  // Compute the denominator, which is 1 + expTerm1 + expTerm2 + all the other expTerms
  const denominator = 1 + expTerm1 + expTerm2 + expTerm3 + expTerm4 + expTerm5 + expTerm6;

  // Calculate the final result as the fraction of numerator/denominator
  const result = numerator / denominator;

  return roundToTwo(result);
}
export function calculateResult6(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute the exponential term for the numerator
  const numeratorExpTerm = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  // Compute the other exponential terms for the denominator
  const expTerm1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  const expTerm2 = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  const expTerm3 = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  const expTerm4 = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  const expTerm5 = numeratorExpTerm; // This term is the same as the numerator

  const expTerm6 = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Compute the numerator
  const numerator = numeratorExpTerm;

  // Compute the denominator, which is 1 + expTerm1 + expTerm2 + all the other expTerms
  const denominator = 1 + expTerm1 + expTerm2 + expTerm3 + expTerm4 + expTerm5 + expTerm6;

  // Calculate the final result as the fraction of numerator/denominator
  const result = numerator / denominator;

  return roundToTwo(result);
}

export function calculateResult7(data) {
  // Extract the individual values from the array
  const [J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC] = data;

  // Compute the exponential term for the numerator
  const numeratorExpTerm = Math.exp(
    -28.042 +
      0.352 * J +
      0.327 * K -
      1.411 * L -
      0.333 * M +
      0.688 * N -
      0.798 * O +
      2.665 * P +
      0.288 * Q +
      0.028 * R +
      1.001 * S +
      0.289 * T +
      0.429 * U -
      0.039 * V -
      0.08 * W +
      0.234 * X +
      1.05 * Y -
      0.711 * Z -
      0.673 * AA +
      1.525 * AB -
      0.616 * AC
  );

  // Compute the other exponential terms for the denominator
  const expTerm1 = Math.exp(
    -23.366 -
      0.678 * J +
      0.206 * K -
      0.279 * L +
      0.095 * M +
      1.485 * N +
      0.032 * O +
      0.47 * P +
      2.372 * Q +
      0.678 * R +
      0.245 * S -
      1.028 * T +
      0.059 * U +
      0.085 * V +
      0.334 * W +
      0.667 * X +
      0.052 * Y -
      0.284 * Z +
      0.16 * AA +
      0.663 * AB -
      0.737 * AC
  );

  const expTerm2 = Math.exp(
    2.187 -
      0.453 * J +
      0.108 * K +
      0.193 * L -
      1.197 * M -
      0.409 * N +
      0.462 * O -
      0.228 * P -
      0.912 * Q +
      0.956 * R +
      0.186 * S +
      0.199 * T -
      0.344 * U +
      0.075 * V +
      0.001 * W +
      0.651 * X -
      0.052 * Y +
      0.102 * Z -
      0.113 * AA +
      0.281 * AB -
      0.564 * AC
  );

  const expTerm3 = Math.exp(
    -10.027 -
      0.882 * J +
      0.192 * K +
      0.182 * L -
      0.269 * M +
      0.791 * N +
      1.061 * O -
      0.674 * P +
      1.3 * Q +
      0.786 * R -
      0.073 * S -
      0.536 * T -
      0.648 * U +
      0.14 * V +
      0.051 * W +
      0.569 * X -
      0.525 * Y +
      0.341 * Z +
      0.641 * AA -
      0.319 * AB -
      0.246 * AC
  );

  const expTerm4 = Math.exp(
    -36.77 +
      0.904 * J +
      0.775 * K +
      0.286 * L +
      1.216 * M +
      0.777 * N -
      0.314 * O +
      0.311 * P +
      1.776 * Q +
      1.157 * R +
      0.599 * S -
      0.685 * T -
      0.196 * U -
      0.136 * V -
      0.189 * W +
      0.028 * X +
      0.376 * Y -
      0.637 * Z -
      0.332 * AA +
      1.256 * AB +
      1.116 * AC
  );

  const expTerm5 = Math.exp(
    -2.365 +
      0.097 * J -
      0.474 * K -
      0.629 * L -
      0.906 * M +
      0.084 * N +
      1.107 * O -
      0.914 * P +
      0.252 * Q +
      0.672 * R +
      1.069 * S -
      2.649 * T -
      0.254 * U +
      0.095 * V -
      0.226 * W +
      1.084 * X -
      0.155 * Y +
      0.792 * Z +
      0.515 * AA -
      0.76 * AB -
      0.554 * AC
  );

  const expTerm6 = numeratorExpTerm; // This term is the same as the numerator

  // Compute the numerator
  const numerator = numeratorExpTerm;

  // Compute the denominator, which is 1 + expTerm1 + expTerm2 + all the other expTerms
  const denominator = 1 + expTerm1 + expTerm2 + expTerm3 + expTerm4 + expTerm5 + expTerm6;

  // Calculate the final result as the fraction of numerator/denominator
  const result = numerator / denominator;

  return roundToTwo(result);
}

export function matchMaxIndex(values) {
  if (values.length !== 7) {
    throw new Error("Array must contain exactly 7 numbers.");
  }
  const maxValue = Math.max(...values);
  return values.indexOf(maxValue) + 1;
}
