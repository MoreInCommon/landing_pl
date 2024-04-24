const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export function calculateResult1(data) {
  // Ensure the array has at least the required 29 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }

  const exp1 = Math.exp(
    -23.366 -
      0.678 * data[0] +
      0.206 * data[1] -
      0.279 * data[2] +
      0.095 * data[3] +
      1.485 * data[4] +
      0.032 * data[5] +
      0.47 * data[6] +
      2.372 * data[7] +
      0.678 * data[8] +
      0.245 * data[9] -
      1.028 * data[10] +
      0.059 * data[11] +
      0.085 * data[12] +
      0.334 * data[13] +
      0.667 * data[14] +
      0.052 * data[15] -
      0.284 * data[16] +
      0.16 * data[17] +
      0.663 * data[18] -
      0.737 * data[19]
  );

  const exp2 = Math.exp(
    2.187 -
      0.453 * data[0] +
      0.108 * data[1] +
      0.193 * data[2] -
      1.197 * data[3] -
      0.409 * data[4] +
      0.462 * data[5] -
      0.228 * data[6] -
      0.912 * data[7] +
      0.956 * data[8] +
      0.186 * data[9] +
      0.199 * data[10] -
      0.344 * data[11] +
      0.075 * data[12] +
      0.001 * data[13] +
      0.651 * data[14] -
      0.052 * data[15] +
      0.102 * data[16] -
      0.113 * data[17] +
      0.281 * data[18] -
      0.564 * data[19]
  );

  const exp3 = Math.exp(
    -10.027 -
      0.882 * data[0] +
      0.192 * data[1] +
      0.182 * data[2] -
      0.269 * data[3] +
      0.791 * data[4] +
      1.061 * data[5] -
      0.674 * data[6] +
      1.3 * data[7] +
      0.786 * data[8] -
      0.073 * data[9] -
      0.536 * data[10] -
      0.648 * data[11] +
      0.14 * data[12] +
      0.051 * data[13] +
      0.569 * data[14] -
      0.525 * data[15] +
      0.341 * data[16] +
      0.641 * data[17] -
      0.319 * data[18] -
      0.246 * data[19]
  );

  const exp4 = Math.exp(
    -36.77 +
      0.904 * data[0] +
      0.775 * data[1] +
      0.286 * data[2] +
      1.216 * data[3] +
      0.777 * data[4] -
      0.314 * data[5] +
      0.311 * data[6] +
      1.776 * data[7] +
      1.157 * data[8] +
      0.599 * data[9] -
      0.685 * data[10] -
      0.196 * data[11] -
      0.136 * data[12] -
      0.189 * data[13] +
      0.028 * data[14] +
      0.376 * data[15] -
      0.637 * data[16] -
      0.332 * data[17] +
      1.256 * data[18] +
      1.116 * data[19]
  );

  return roundToTwo(1 / (1 + exp1 + exp2 + exp3 + exp4));
}

export function calculateResult2(data) {
  // Ensure the array has at least the required 20 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }
  // Calculate the exponential for the given base and coefficient list
  function computeExponential(base, coefficients) {
    return Math.exp(base + coefficients.reduce((acc, coeff, idx) => acc + coeff * data[idx], 0));
  }

  // Common coefficients for multiple uses in both numerator and first term of the denominator
  const commonCoeffs = [
    -0.678, 0.206, -0.279, 0.095, 1.485, 0.032, 0.47, 2.372, 0.678, 0.245, -1.028, 0.059, 0.085,
    0.334, 0.667, 0.052, -0.284, 0.16, 0.663, -0.737,
  ];

  // Additional coefficients for other terms in the denominator
  const coeffs2 = [
    -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344, 0.075,
    0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
  ];
  const coeffs3 = [
    -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
    0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
  ];
  const coeffs4 = [
    0.904, 0.775, 0.286, 1.216, 0.777, -0.314, 0.311, 1.776, 1.157, 0.599, -0.685, -0.196, -0.136,
    -0.189, 0.028, 0.376, -0.637, -0.332, 1.256, 1.116,
  ];
  const coeffs5 = [
    0.097, -0.474, -0.629, -0.906, 0.084, 1.107, -0.914, 0.252, 0.672, 1.069, -2.649, -0.254, 0.095,
    -0.226, 1.084, -0.155, 0.792, 0.515, -0.76, -0.554,
  ];
  const coeffs6 = [
    0.352, 0.327, -1.411, -0.333, 0.688, -0.798, 2.665, 0.288, 0.028, 1.001, 0.289, 0.429, -0.039,
    -0.08, 0.234, 1.05, -0.711, -0.673, 1.525, -0.616,
  ];

  // Base values for each exponential
  const base1 = -23.366; // For both first terms in numerator and denominator
  const base2 = 2.187;
  const base3 = -10.027;
  const base4 = -36.77;
  const base5 = -2.365;
  const base6 = -28.042;

  // Calculate each exponential term
  const exp1 = computeExponential(base1, commonCoeffs);
  const exp2 = computeExponential(base2, coeffs2);
  const exp3 = computeExponential(base3, coeffs3);
  const exp4 = computeExponential(base4, coeffs4);
  const exp5 = computeExponential(base5, coeffs5);
  const exp6 = computeExponential(base6, coeffs6);

  return roundToTwo(exp1 / (1 + exp1 + exp2 + exp3 + exp4 + exp5 + exp6));
}
export function calculateResult3(data) {
  // Ensure the array has at least the required 20 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }

  // Define the coefficients and base for the first EXP term
  const coeffs1 = [
    -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344, 0.075,
    0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
  ];
  const base1 = 2.187;

  // Helper function to compute the exponential value
  function computeExponential(base, coefficients) {
    return Math.exp(
      base + coefficients.reduce((sum, coeff, index) => sum + coeff * data[index], 0)
    );
  }

  // Calculate the first EXP term
  const exp1 = computeExponential(base1, coeffs1);

  // Define bases and coefficients for additional EXP terms in the denominator
  const bases = [-23.366, 2.187, -10.027, -36.77, -2.365, -28.042];
  const coeffsList = [
    [
      -0.678, 0.206, -0.279, 0.095, 1.485, 0.032, 0.47, 2.372, 0.678, 0.245, -1.028, 0.059, 0.085,
      0.334, 0.667, 0.052, -0.284, 0.16, 0.663, -0.737,
    ], // Same as first term
    [
      -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344,
      0.075, 0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
    ], // Repeated term
    [
      -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
      0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
    ],
    [
      0.904, 0.775, 0.286, 1.216, 0.777, -0.314, 0.311, 1.776, 1.157, 0.599, -0.685, -0.196, -0.136,
      -0.189, 0.028, 0.376, -0.637, -0.332, 1.256, 1.116,
    ],
    [
      0.097, -0.474, -0.629, -0.906, 0.084, 1.107, -0.914, 0.252, 0.672, 1.069, -2.649, -0.254,
      0.095, -0.226, 1.084, -0.155, 0.792, 0.515, -0.76, -0.554,
    ],
    [
      0.352, 0.327, -1.411, -0.333, 0.688, -0.798, 2.665, 0.288, 0.028, 1.001, 0.289, 0.429, -0.039,
      -0.08, 0.234, 1.05, -0.711, -0.673, 1.525, -0.616,
    ],
  ];

  // Compute all exponential terms in the denominator
  const denomTerms = bases.map((base, index) => computeExponential(base, coeffsList[index]));

  // Calculate the sum for the denominator (1 + sum of all EXP terms)
  const denom = 1 + denomTerms.reduce((sum, term) => sum + term, 0);

  // Final result for the expression
  return roundToTwo(exp1 / denom);
}
export function calculateResult4(data) {
  // Ensure the array has at least the required 20 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }

  // Helper function to compute the exponential value
  function computeExponential(base, coefficients) {
    return Math.exp(
      base + coefficients.reduce((sum, coeff, index) => sum + coeff * data[index], 0)
    );
  }

  // Coefficients and bases for each term
  const coeffs = [
    [
      -0.678, 0.206, -0.279, 0.095, 1.485, 0.032, 0.47, 2.372, 0.678, 0.245, -1.028, 0.059, 0.085,
      0.334, 0.667, 0.052, -0.284, 0.16, 0.663, -0.737,
    ], // Same as first term in the denominator
    [
      -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344,
      0.075, 0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
    ], // Second term in the denominator
    [
      -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
      0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
    ], // Same as the first term to be calculated now
  ];
  const bases = [-23.366, 2.187, -10.027];

  // Coefficients for the first term to be calculated
  const firstCoeffs = [
    -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
    0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
  ];
  const firstBase = -10.027;

  // Calculate the first exponential term
  const exp1 = computeExponential(firstBase, firstCoeffs);

  // Calculate all exponential terms in the denominator
  const denomTerms = bases.map((base, index) => computeExponential(base, coeffs[index]));

  // Calculate the sum for the denominator (1 + sum of all EXP terms)
  const denom = 1 + denomTerms.reduce((sum, term) => sum + term, 0);

  return roundToTwo(exp1 / denom);
}
export function calculateResult5(data) {
  // Ensure the array has at least the required 20 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }

  // Helper function to compute the exponential value
  function computeExponential(base, coefficients) {
    return Math.exp(
      base + coefficients.reduce((sum, coeff, index) => sum + coeff * data[index], 0)
    );
  }

  // Coefficients and bases for each term
  const coeffs = [
    [
      -0.678, 0.206, -0.279, 0.095, 1.485, 0.032, 0.47, 2.372, 0.678, 0.245, -1.028, 0.059, 0.085,
      0.334, 0.667, 0.052, -0.284, 0.16, 0.663, -0.737,
    ],
    [
      -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344,
      0.075, 0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
    ],
    [
      -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
      0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
    ],
    [
      0.904, 0.775, 0.286, 1.216, 0.777, -0.314, 0.311, 1.776, 1.157, 0.599, -0.685, -0.196, -0.136,
      -0.189, 0.028, 0.376, -0.637, -0.332, 1.256, 1.116,
    ], // This is the term being calculated
    [
      0.097, -0.474, -0.629, -0.906, 0.084, 1.107, -0.914, 0.252, 0.672, 1.069, -2.649, -0.254,
      0.095, -0.226, 1.084, -0.155, 0.792, 0.515, -0.76, -0.554,
    ],
    [
      0.352, 0.327, -1.411, -0.333, 0.688, -0.798, 2.665, 0.288, 0.028, 1.001, 0.289, 0.429, -0.039,
      -0.08, 0.234, 1.05, -0.711, -0.673, 1.525, -0.616,
    ],
  ];
  const bases = [-23.366, 2.187, -10.027, -36.77, -2.365, -28.042];

  // Calculate the exponential term being asked for
  const targetExp = computeExponential(-36.77, coeffs[3]); // Index 3 corresponds to the fourth term

  // Calculate all exponential terms in the denominator
  const denomTerms = bases.map((base, index) => computeExponential(base, coeffs[index]));

  // Calculate the sum for the denominator (1 + sum of all EXP terms)
  const denom = 1 + denomTerms.reduce((sum, term) => sum + term, 0);

  return roundToTwo(targetExp / denom);
}
export function calculateResult6(data) {
  // Ensure the array has at least the required 20 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }

  // Helper function to compute the exponential value
  function computeExponential(base, coefficients) {
    return Math.exp(
      base + coefficients.reduce((sum, coeff, index) => sum + coeff * data[index], 0)
    );
  }

  // Coefficients and base for the numerator
  const numeratorBase = -2.365;
  const numeratorCoeffs = [
    0.097, -0.474, -0.629, -0.906, 0.084, 1.107, -0.914, 0.252, 0.672, 1.069, -2.649, -0.254, 0.095,
    -0.226, 1.084, -0.155, 0.792, 0.515, -0.76, -0.554,
  ];

  // Bases and coefficients for all exponential terms in the denominator
  const bases = [-23.366, 2.187, -10.027, -36.77, -2.365, -28.042];
  const coeffsList = [
    [
      -0.678, 0.206, -0.279, 0.095, 1.485, 0.032, 0.47, 2.372, 0.678, 0.245, -1.028, 0.059, 0.085,
      0.334, 0.667, 0.052, -0.284, 0.16, 0.663, -0.737,
    ],
    [
      -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344,
      0.075, 0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
    ],
    [
      -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
      0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
    ],
    [
      0.904, 0.775, 0.286, 1.216, 0.777, -0.314, 0.311, 1.776, 1.157, 0.599, -0.685, -0.196, -0.136,
      -0.189, 0.028, 0.376, -0.637, -0.332, 1.256, 1.116,
    ],
    [
      0.097, -0.474, -0.629, -0.906, 0.084, 1.107, -0.914, 0.252, 0.672, 1.069, -2.649, -0.254,
      0.095, -0.226, 1.084, -0.155, 0.792, 0.515, -0.76, -0.554,
    ],
    [
      0.352, 0.327, -1.411, -0.333, 0.688, -0.798, 2.665, 0.288, 0.028, 1.001, 0.289, 0.429, -0.039,
      -0.08, 0.234, 1.05, -0.711, -0.673, 1.525, -0.616,
    ],
  ];

  // Calculate the numerator's exponential term
  const numerator = computeExponential(numeratorBase, numeratorCoeffs);

  // Calculate all exponential terms in the denominator
  const denomTerms = bases.map((base, index) => computeExponential(base, coeffsList[index]));

  // Calculate the sum for the denominator (1 + sum of all EXP terms)
  const denom = 1 + denomTerms.reduce((sum, term) => sum + term, 0);

  return roundToTwo(numerator / denom);
}

export function calculateResult7(data) {
  // Ensure the array has at least the required 20 elements
  if (data.length < 20) {
    throw new Error("Data array needs at least 20 elements");
  }

  // Helper function to calculate the exponential term based on base and coefficients
  function computeExponential(base, coefficients) {
    return Math.exp(
      base + coefficients.reduce((sum, coeff, index) => sum + coeff * data[index], 0)
    );
  }

  // Numerator's exponential term coefficients and base
  const numeratorCoeffs = [
    0.352, 0.327, -1.411, -0.333, 0.688, -0.798, 2.665, 0.288, 0.028, 1.001, 0.289, 0.429, -0.039,
    -0.08, 0.234, 1.05, -0.711, -0.673, 1.525, -0.616,
  ];
  const numeratorBase = -28.042;

  // Coefficients and bases for the additional exponential terms in the denominator
  const bases = [-23.366, 2.187, -10.027, -36.77, -2.365, -28.042];
  const coeffsList = [
    [
      -0.678, 0.206, -0.279, 0.095, 1.485, 0.032, 0.47, 2.372, 0.678, 0.245, -1.028, 0.059, 0.085,
      0.334, 0.667, 0.052, -0.284, 0.16, 0.663, -0.737,
    ],
    [
      -0.453, 0.108, 0.193, -1.197, -0.409, 0.462, -0.228, -0.912, 0.956, 0.186, 0.199, -0.344,
      0.075, 0.001, 0.651, -0.052, 0.102, -0.113, 0.281, -0.564,
    ],
    [
      -0.882, 0.192, 0.182, -0.269, 0.791, 1.061, -0.674, 1.3, 0.786, -0.073, -0.536, -0.648, 0.14,
      0.051, 0.569, -0.525, 0.341, 0.641, -0.319, -0.246,
    ],
    [
      0.904, 0.775, 0.286, 1.216, 0.777, -0.314, 0.311, 1.776, 1.157, 0.599, -0.685, -0.196, -0.136,
      -0.189, 0.028, 0.376, -0.637, -0.332, 1.256, 1.116,
    ],
    [
      0.097, -0.474, -0.629, -0.906, 0.084, 1.107, -0.914, 0.252, 0.672, 1.069, -2.649, -0.254,
      0.095, -0.226, 1.084, -0.155, 0.792, 0.515, -0.76, -0.554,
    ],
    [
      0.352, 0.327, -1.411, -0.333, 0.688, -0.798, 2.665, 0.288, 0.028, 1.001, 0.289, 0.429, -0.039,
      -0.08, 0.234, 1.05, -0.711, -0.673, 1.525, -0.616,
    ],
  ];

  // Compute the numerator
  const numerator = computeExponential(numeratorBase, numeratorCoeffs);

  // Compute all exponential terms in the denominator
  const denomTerms = bases.map((base, index) => computeExponential(base, coeffsList[index]));

  // Calculate the sum for the denominator (1 + sum of all EXP terms)
  const denominator = 1 + denomTerms.reduce((sum, term) => sum + term, 0);

  return roundToTwo(numerator / denominator);
}

export function matchMaxIndex(values) {
  if (values.length !== 7) {
    throw new Error("Array must contain exactly 7 numbers.");
  }
  const maxValue = Math.max(...values);
  return values.indexOf(maxValue) + 1;
}
