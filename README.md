# 🚦 Explainable Multi-Agent RL System for Traffic Signal Control

This project presents an **interactive visual analytics system** to explore and explain behaviors in **Multi-Agent Reinforcement Learning (MARL)** applied to traffic signal control in urban road networks.

![System Architecture](images/fig1_technical_framework.png)
*Figure 1. Technical Framework for Visual Analysis System*

## 📚 Contents

- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Views](#views)
- [Usage](#usage)
- [References](#references)

---

## Overview

This system enables urban traffic researchers and practitioners to:
- Evaluate RL models like MADDPG, DQN, and CoLight.
- Understand agent decisions via visual queues and metrics.
- Trace congestion propagation and suggest intersection-level optimizations.

---

## Features

✅ Model performance metrics  
✅ Simulation playback of road congestion  
✅ Real-time lane-level queue visualizations  
✅ Inter-agent congestion correlation analysis  
✅ Interactive frontend using **Vue.js**  
✅ Flask-powered backend using **Python**, **Pandas**

---

## System Architecture

- **Frontend:** Vue.js + NPM + D3 for visual interactivity.
- **Backend:** Flask + Pandas for data serving and preprocessing.

```mermaid
graph TD;
  A[User Interaction] --> B[Vue Frontend];
  B --> C[Visualization Components];
  C --> D[Data API via Flask];
  D --> E[Pandas/Numpy Backend];
