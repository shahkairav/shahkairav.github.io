---
# PLACEHOLDER — sample project. Replace or delete.
title: Lattice Ising Model
summary: Metropolis sampling of the 2D Ising model in the browser, with a live view of domains forming as the temperature falls through its critical value.
year: 2025
stack: Rust, WebAssembly
cover: /projects/ising.svg
coverAlt: Black-and-white lattice of spins forming irregular domains
tags: [statistical mechanics, Monte Carlo]
links:
  code: https://github.com/shahkairav
featured: true
order: 2
---

## The model

Spins $s_i \in \{-1, +1\}$ sit on a square lattice with energy $H = -J \sum_{\langle i j \rangle} s_i s_j$. Onsager showed in 1944 that the model orders below the critical temperature

$$
\frac{k_B T_c}{J} = \frac{2}{\ln\left(1 + \sqrt2\right)} \approx 2.269.
$$

## Implementation

*[Placeholder — describe the Metropolis update, the WebAssembly build and the rendering loop.]*
