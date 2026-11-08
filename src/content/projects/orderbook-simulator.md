---
# PLACEHOLDER — sample project. Replace or delete.
title: Orderbook Simulator
summary: A discrete-event simulation of a limit order book with Hawkes-process order arrivals, used to study how liquidity evaporates under stress.
year: 2026
stack: Python
cover: /projects/orderbook.svg
coverAlt: Stepped depth chart of bids and asks either side of the mid price
tags: [market microstructure, simulation]
links:
  code: https://github.com/shahkairav
featured: true
order: 1
---

## Motivation

Order arrivals in real markets cluster: one trade makes the next more likely. A Hawkes process captures this self-excitation with an intensity that jumps after each event and decays back to a baseline,

$$
\lambda(t) = \mu + \sum_{t_i < t} \alpha\, e^{-\beta (t - t_i)}.
$$

## What it does

The simulator replays this process against a price-time priority matching engine and records depth, spread and realised volatility. *[Placeholder — describe your design, results and what you learned.]*
