# Towards AI That Improves Itself: A Survey of Recursive Self-Improvement

> 📚 An **Awesome List** of Recursive Self-Improvement (RSI) papers — methods, systems, benchmarks, verifiers, and safety work — organized by **Evolution Families**, the **RSI Framework**, and **Frontier Dimensions**.

A curated, structured bibliography for *Towards AI That Improves Itself: A Survey of Recursive Self-Improvement*. Papers are organized along three lenses — **Evolution Families** (what is evolved), **RSI Framework** (the Proposal → Feedback → Optimization loop), and **Frontier Dimensions** (open problems).

<!-- badges -->
[![Website](https://img.shields.io/badge/Website-Live-0B6B65?style=flat-square)](https://lee1003-lee.github.io/Towards-AI-That-Improves-Itself-A-Survey-of-Recursive-Self-Improvement/)  [![Paper](https://img.shields.io/badge/Paper-PDF-A42C25?style=flat-square)](assets/rsi-survey.pdf)  [![Code](https://img.shields.io/badge/Code-GitHub-6B7280?style=flat-square)](https://github.com/Lee1003-lee/RSI-survey)  [![Contributions](https://img.shields.io/badge/PRs-welcome-6B7280?style=flat-square)](https://github.com/Lee1003-lee/RSI-survey)

## Contents

1. [Evolution Families](#1-evolution-families) — Behavior, Agent-System, Model & Data, Research-Process
2. [RSI Framework](#2-rsi-framework) — Proposal / Feedback / Optimization
3. [Frontier Dimensions](#3-frontier-dimensions) — Reliability → Generalization

> **Legend** — *Paper* links to arXiv. Only RSI-core work is listed; foundational and background references are omitted.

## 1. Evolution Families

Four targets of RSI-related evolution, following the survey taxonomy. Within each sub-category, papers are grouped by *Feedback Pattern*, *Optimization Loops*, and *RSI Target Scope*.

### Behavior Evolution

#### Overview

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Self-Reference in Large Language Models: The Introspection Threshold for Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.04277) |

#### Output Self-Refine

##### Feedback Pattern: Critique and Reflection

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Llm critics help catch llm bugs | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.00215) |
| 2025 | Agent-r: Training language model agents to reflect via iterative self-training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.11425) |
| 2026 | EVE-Agent: Evidence-Verifiable Self-Evolving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22905) |
| 2026 | Self-Evolving Agents with Anytime-Valid Certificates | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.00871) |

##### Optimization Loops: Reusable Critique

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Agent-r: Training language model agents to reflect via iterative self-training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.11425) |
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2025 | Reflection-based memory for web navigation agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.02158) |
| 2025 | Truly self-improving agents require intrinsic metacognitive learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.05109) |
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |
| 2026 | On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.18066) |
| 2026 | Phantom Gains: Auditing Self-Improvement Against a Measured Null | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.20290) |
| 2026 | Recursive Self-Evolving Agents via Held-Out Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.28374) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### RSI Target Scope: Solution Calibration

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Dspy assertions: Computational constraints for self-refining language model pipelines | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.13382) |
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26530) |

#### State Optimization

##### Feedback Pattern: State and Action Link

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | MetaSkill-Evolve: Recursive Self-Improvement of LLM Agents via Two-Timescale Meta-Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.05297) |
| 2026 | Skillrl: Evolving agents via recursive skill-augmented reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08234) |

##### Optimization Loops: Reused State

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |

##### RSI Target Scope: State Types

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Memgpt: Towards llms as operating systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08560) |
| 2023 | Promptbreeder: Self-referential self-improvement via prompt evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.16797) |
| 2023 | Voyager: An open-ended embodied agent with large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | Self-Improving Large Language Models via Progressive Experience Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02139) |
| 2026 | SkillMaster: Toward Autonomous Skill Mastery in LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08693) |
| 2026 | WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.27454) |

#### Test-Time Evolution

##### Feedback Pattern: Search Feedback

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Efficient process reward model training via active learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.10559) |
| 2026 | CAFE: Self-Improving Search Agents Need Co-Evolving Feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.24794) |
| 2026 | PACE-Bench: Benchmarking Physics Adaptation via Code Evolution in Dynamic Environments | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.14441) |
| 2026 | PACEvolve++: Improving Test-time Learning for Evolutionary Search Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.07039) |

##### Optimization Loops: Reuse of Search Traces

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Efficient process reward model training via active learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.10559) |
| 2026 | CAFE: Self-Improving Search Agents Need Co-Evolving Feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.24794) |

##### RSI Target Scope: Search Target

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | PACEvolve++: Improving Test-time Learning for Evolutionary Search Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.07039) |
| 2026 | Self-Evolving Agents with Anytime-Valid Certificates | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.00871) |


### Agent-System Evolution

#### Overview

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Ai harness engineering: A runtime substrate for foundation-model software agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | Code as agent harness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18747) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Meta^n: Recursive Self-Improvement through Emergent Depth | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.24735) |
| 2026 | Position: Agentic evolution is the path to evolving llms | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.00359) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |

#### Workflow Evolution

##### Feedback Pattern: Workflow Search and Role Diversity

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Flex: Continuous agent evolution via forward learning from experience | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.06449) |
| 2026 | Ai harness engineering: A runtime substrate for foundation-model software agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | Coral: Towards autonomous multi-agent evolution for open-ended discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.01658) |
| 2026 | Evo-harness: Context-to-harness skill compilation for self-evolving agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.15071) |
| 2026 | Harnessing agentic evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13821) |
| 2026 | MAS-ProVe: Understanding the process verification of multi-agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.03053) |
| 2026 | Meta-harness: End-to-end optimization of model harnesses | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28052) |
| 2026 | MetaEvo: A Meta-Optimization Framework for Experience-Driven Agent Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07603) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |

##### Optimization Loops: Workflow Search and Promotion

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Flex: Continuous agent evolution via forward learning from experience | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.06449) |
| 2025 | Towards self-evolving benchmarks: Synthesizing agent trajectories via test-time exploration under validate-by-reproduce paradigm | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.00415) |
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Evo-harness: Context-to-harness skill compilation for self-evolving agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.15071) |
| 2026 | Evolving Agents in the Dark: Retrospective Harness Optimization via Self-Preference | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05922) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Harness Updating Is Not Harness Benefit: Disentangling Evolution Capabilities in Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30621) |
| 2026 | Harnessing agentic evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13821) |
| 2026 | Meta-harness: End-to-end optimization of model harnesses | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28052) |
| 2026 | MetaEvo: A Meta-Optimization Framework for Experience-Driven Agent Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07603) |
| 2026 | Recursive Self-Evolving Agents via Held-Out Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.28374) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### RSI Target Scope: Prompt and Workflow Parameters

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Promptbreeder: Self-referential self-improvement via prompt evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.16797) |
| 2024 | TextGrad: Automatic "Differentiation" via Text | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.07496) |
| 2025 | Scope: Prompt evolution for enhancing agent effectiveness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.15374) |
| 2026 | Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.27266) |
| 2026 | The Optimizer Is the Agent: Reasoning-Driven Search across Prompts, Programs, and ML Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.06714) |

#### Memory Evolution

##### Feedback Pattern: Retrieval and Outcome Signal

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Memgpt: Towards llms as operating systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08560) |
| 2026 | Bayesian-Agent: Posterior-Guided Skill Evolution for LLM Agent Harnesses | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08348) |
| 2026 | EVOMAL: Self-Poisoning in Self-Evolving Coding Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.25776) |
| 2026 | SkillJack: Persistent Skill Backdoors in Self-Evolving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.03509) |

##### Optimization Loops: Memory Update Loop

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | Metis: Bridging Text and Code Memory for Self-Evolving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.24151) |
| 2026 | Skillrl: Evolving agents via recursive skill-augmented reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08234) |

##### RSI Target Scope: Memory Policy

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | Library drift: Diagnosing and fixing a silent failure mode in self-evolving LLM skill libraries | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19576) |
| 2026 | PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26530) |
| 2026 | Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.24876) |
| 2026 | SkillMaster: Toward Autonomous Skill Mastery in LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08693) |
| 2026 | WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.27454) |

#### Code Rewriting as a Bridge

##### Feedback Pattern: What Code Can Change

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Alphaevolve: A coding agent for scientific and algorithmic discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13131) |
| 2026 | ProofEvolve: Neuro-Symbolic Evolution for Formal Automated Theorem Proving | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26334) |

##### Optimization Loops: Code Update Loop

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | DarwinX: Evolving Agent Harnesses Through Natural Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07545) |
| 2026 | Mendel Gödel Machine: Recursive Self-Improving Coding Agents via Comparative Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07645) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | ProofEvolve: Neuro-Symbolic Evolution for Formal Automated Theorem Proving | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26334) |

##### RSI Target Scope: Code Target

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | DarwinX: Evolving Agent Harnesses Through Natural Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07545) |
| 2026 | Mendel Gödel Machine: Recursive Self-Improving Coding Agents via Comparative Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07645) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |

#### Harness Evolution

##### Feedback Pattern: Update Policy

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Ai harness engineering: A runtime substrate for foundation-model software agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### Optimization Loops: Regression Checks and Rollback

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Code as agent harness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18747) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Harness Updating Is Not Harness Benefit: Disentangling Evolution Capabilities in Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30621) |
| 2026 | Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02276) |
| 2026 | HarnessEvolve: Learning from Reference Trajectories for Reliable Agent Self-Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2609.00829) |
| 2026 | Harnessing agentic evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13821) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### RSI Target Scope: Release Process

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Ai harness engineering: A runtime substrate for foundation-model software agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | Code as agent harness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18747) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02276) |
| 2026 | Harnessx: A composable, adaptive, and evolvable agent harness foundry | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14249) |
| 2026 | PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26530) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |


### Model & Data Evolution

#### Overview

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Self-rewarding language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.10020) |
| 2026 | Offseeker: Online reinforcement learning is not all you need for deep research agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.18467) |

#### Synthetic Data

##### Feedback Pattern: Data Feedback



##### Optimization Loops: Data Strategy

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | DataFoundry: Evolving Data Preparators via Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.29966) |
| 2026 | Offseeker: Online reinforcement learning is not all you need for deep research agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.18467) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |

##### RSI Target Scope: Data Generation

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.23802) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |

#### Meta-Rewarding

##### Feedback Pattern: Independent Reward Checks

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Free process rewards without process labels | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.01981) |
| 2026 | Reward under attack: Analyzing the robustness and hackability of process reward models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.06621) |
| 2026 | Who Grades the Grader? Co-Evolving Evaluation Metrics and Skills for Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12790) |

##### Optimization Loops: Evaluator and Model Update

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Free process rewards without process labels | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.01981) |

##### RSI Target Scope: Reward Signal

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Self-rewarding language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.10020) |
| 2026 | J-Zero: Unified Challenger–Solver–Judge Co-Evolution from Zero Data | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26582) |
| 2026 | Self-Trained Verification for Training-and Test-Time Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30290) |

#### Post-Training

##### Feedback Pattern: Outcome and Process Signals

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Self-play fine-tuning converts weak language models to strong language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.01335) |
| 2026 | Offseeker: Online reinforcement learning is not all you need for deep research agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.18467) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### Optimization Loops: Experience Updates the Model

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | Self-play fine-tuning converts weak language models to strong language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.01335) |
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | A-Evolve-Training: Autonomous Post-Training of a 30B Model | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20657) |
| 2026 | ANDES: Agent Native Data Evolving Synthesis Tool for Autonomous Instruction Alignment | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01279) |
| 2026 | AutoTrainess: Teaching Language Models to Improve Language Models Autonomously | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.31551) |
| 2026 | DataMaster: Data-Centric Autonomous AI Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.10906) |
| 2026 | Offseeker: Online reinforcement learning is not all you need for deep research agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.18467) |
| 2026 | PostTrainBench: Can LLM Agents Automate LLM Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08640) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | Skillrl: Evolving agents via recursive skill-augmented reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08234) |
| 2026 | What is Missing from AI Post-Training AI: An Empirical Analysis | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.19072) |

##### RSI Target Scope: Trajectory Training

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Agent2world: Learning to generate symbolic world models via adaptive multi-agent feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.22336) |
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | A-Evolve-Training: Autonomous Post-Training of a 30B Model | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20657) |
| 2026 | Cooperative Coevolution for Resource-Constrained Agentic LLM Post-Training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02391) |
| 2026 | Offseeker: Online reinforcement learning is not all you need for deep research agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.18467) |
| 2026 | PostTrainBench: Can LLM Agents Automate LLM Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08640) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

#### Self-Play Evolution

##### Feedback Pattern: Task Distribution

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | J-Zero: Unified Challenger–Solver–Judge Co-Evolution from Zero Data | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26582) |
| 2026 | Skill Self-Play: Pushing the frontier of LLM capability with co-evolving skills | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.22529) |

##### Optimization Loops: Open Skill Loop

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Skill Self-Play: Pushing the frontier of LLM capability with co-evolving skills | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.22529) |
| 2026 | Skillrl: Evolving agents via recursive skill-augmented reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08234) |
| 2026 | The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.26294) |

##### RSI Target Scope: Curriculum Loop

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | J-Zero: Unified Challenger–Solver–Judge Co-Evolution from Zero Data | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26582) |
| 2026 | Skill Self-Play: Pushing the frontier of LLM capability with co-evolving skills | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.22529) |


### Research-Process Evolution

#### Overview

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | The ai scientist: Towards fully automated open-ended scientific discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.06292) |
| 2025 | Ai scientists fail without strong implementation capability | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01372) |
| 2025 | How far are AI scientists from changing the world? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.23276) |
| 2025 | The ai scientist-v2: Workshop-level automated scientific discovery via agentic tree search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.08066) |
| 2026 | Are LLMs Ready for Scientific Discovery? A Capability-Oriented Benchmark for AI Scientists | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.11079) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | Auto Research for Materials: Auditable AI-Scientist Workflows with Held-Out Transfer | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.17100) |
| 2026 | Mars: Modular agent with reflective search for automated ai research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02660) |
| 2026 | Past-bench: Benchmarking the foundations of recursive self-improvement in personal agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04003) |
| 2026 | Scaling Automatic Research Agents via World Models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12564) |

#### Scientific Operation Agents

##### Feedback Pattern: Domain Tests and Concrete Checks

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AI Can Learn Scientific Taste | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.14473) |
| 2026 | AQuA: Recursively Self-Improving Quantitative Trading Research Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12841) |
| 2026 | BABE: Biology Arena BEnchmark | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.05857) |
| 2026 | BaT: Towards Self-Evolving Medical Research Agent with Stage Rubrics | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.16211) |
| 2026 | CausalForge: A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal Inference | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.22511) |
| 2026 | ProofEvolve: Neuro-Symbolic Evolution for Formal Automated Theorem Proving | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26334) |

##### Optimization Loops: Experiment-Guided Iteration

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Chemcrow: Augmenting large-language models with chemistry tools | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.05376) |
| 2026 | CausalForge: A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal Inference | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.22511) |

##### RSI Target Scope: Scientific Toolchain

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Chemcrow: Augmenting large-language models with chemistry tools | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.05376) |
| 2023 | Emergent autonomous scientific research capabilities of large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.05332) |
| 2026 | ProofEvolve: Neuro-Symbolic Evolution for Formal Automated Theorem Proving | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26334) |

#### AI4AI & MLE

##### Feedback Pattern: Training and Search as One Experience Loop

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |

##### Optimization Loops: Experience Inheritance

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Agent^ 2 RL-Bench: Can LLM Agents Engineer Agentic RL Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.10547) |
| 2026 | Ai4ai-bench: Benchmarking llm agents in algorithmic design for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.20318) |
| 2026 | From 0-to-1 to 1-to-N: Reproducible Engineering Evidence for MetaAI Recursive Self-Design | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.09663) |
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |
| 2026 | NatureBench: Can Coding Agents Match the Published SOTA of Nature-Family Papers? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.24530) |
| 2026 | PACE-Bench: Benchmarking Physics Adaptation via Code Evolution in Dynamic Environments | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.14441) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | Synthetic sandbox for training machine learning engineering agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04872) |

##### RSI Target Scope: Experience Factory

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Alphaevolve: A coding agent for scientific and algorithmic discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13131) |
| 2025 | BoxingGym: Benchmarking progress in automated experimental design and model discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.01540) |
| 2026 | Ai4ai-bench: Benchmarking llm agents in algorithmic design for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.20318) |
| 2026 | From 0-to-1 to 1-to-N: Reproducible Engineering Evidence for MetaAI Recursive Self-Design | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.09663) |
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |
| 2026 | Synthetic sandbox for training machine learning engineering agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04872) |

#### E2E AI Scientist

##### Feedback Pattern: External Research Evidence

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Ai scientists fail without strong implementation capability | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01372) |
| 2025 | How far are AI scientists from changing the world? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.23276) |
| 2025 | Jr. AI scientist and its risk report: Autonomous scientific exploration from a baseline paper | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.04583) |
| 2025 | The more you automate, the less you see: Hidden pitfalls of ai scientist systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.08713) |
| 2026 | Dead Science Walking: Publication Bias and the AI Scientist Pipeline | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04220) |

##### Optimization Loops: Experiment-to-Decision Inheritance

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2024 | The ai scientist: Towards fully automated open-ended scientific discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.06292) |
| 2025 | PaperBench: evaluating AI's ability to replicate AI research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.01848) |
| 2025 | The ai scientist-v2: Workshop-level automated scientific discovery via agentic tree search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.08066) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25256) |
| 2026 | Mars: Modular agent with reflective search for automated ai research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02660) |
| 2026 | One Interaction Is Worth a Thousand Guesses: Benchmarking the Interactive Capabilities of Deep Research Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.06676) |
| 2026 | Rehearse: Stepping Back from the Confidence Cliff in Self-Improving Autoresearch | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.27687) |
| 2026 | ResearchClawBench: A benchmark for end-to-end autonomous scientific research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07591) |
| 2026 | Training AI Scientists to Replicate Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13331) |

##### RSI Target Scope: Research Workspace




## 2. RSI Framework

The Proposal → Feedback → Optimization loop, decomposed into its six components.

### Proposal Stage

#### Target Selection

##### Diagnosis & attribution

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | AQuA: Recursively Self-Improving Quantitative Trading Research Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12841) |
| 2026 | Are LLMs Ready for Scientific Discovery? A Capability-Oriented Benchmark for AI Scientists | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.11079) |
| 2026 | AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25256) |
| 2026 | DarwinX: Evolving Agent Harnesses Through Natural Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07545) |
| 2026 | EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04968) |
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |
| 2026 | Knowledge-Centric Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.19592) |
| 2026 | MetaVideoAgent: Automated Video-Agent Evolution for Long-Form Video Understanding | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04587) |
| 2026 | One Interaction Is Worth a Thousand Guesses: Benchmarking the Interactive Capabilities of Deep Research Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.06676) |
| 2026 | Recursive Harness Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.15524) |
| 2026 | ResearchClawBench: A benchmark for end-to-end autonomous scientific research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07591) |
| 2026 | Self-Improving Large Language Models via Progressive Experience Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02139) |

##### Granularity Selection

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Promptbreeder: Self-referential self-improvement via prompt evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.16797) |
| 2024 | TextGrad: Automatic "Differentiation" via Text | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.07496) |
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Ai harness engineering: A runtime substrate for foundation-model software agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |

##### Target Persistence

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Voyager: An open-ended embodied agent with large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) |
| 2024 | Self-rewarding language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.10020) |
| 2024 | The ai scientist: Towards fully automated open-ended scientific discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.06292) |
| 2025 | Continuous self-improvement of large language models by test-time training with verifier-driven sample selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.19475) |
| 2026 | Adaptive Auto-Harness: Sustained Self-Improvement for Agentic System Deployment on Open-Ended Task Streams | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01770) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | Auditing Discovery Claims: A Two-Sided Criterion for Agentic Science, with the Negative Side Decidable | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.00981) |
| 2026 | Auto Research for Materials: Auditable AI-Scientist Workflows with Held-Out Transfer | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.17100) |
| 2026 | Bayesian-Agent: Posterior-Guided Skill Evolution for LLM Agent Harnesses | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08348) |
| 2026 | Continual harness: Online adaptation for self-improving foundation agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.09998) |
| 2026 | DIVE: Unlocking Self-Improvement in Frozen Language Models Through Diversity-Driven Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12486) |
| 2026 | Harnessx: A composable, adaptive, and evolvable agent harness foundry | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14249) |
| 2026 | Past-bench: Benchmarking the foundations of recursive self-improvement in personal agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04003) |
| 2026 | PostTrainBench: Can LLM Agents Automate LLM Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08640) |
| 2026 | Rehearse: Stepping Back from the Confidence Cliff in Self-Improving Autoresearch | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.27687) |
| 2026 | SBCO: Self-Supervised, Verifier-Grounded Harness Optimization For Planning Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10157) |
| 2026 | Skillopt: Executive strategy for self-evolving agent skills | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.23904) |
| 2026 | Skillrl: Evolving agents via recursive skill-augmented reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08234) |
| 2026 | The Scaling Laws of Skills in LLM Agent Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.16508) |

##### Key challenge

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Auditing Discovery Claims: A Two-Sided Criterion for Agentic Science, with the Negative Side Decidable | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.00981) |
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |
| 2026 | From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.23802) |
| 2026 | Past-bench: Benchmarking the foundations of recursive self-improvement in personal agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04003) |
| 2026 | Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12851) |
| 2026 | Self-Authored Verification Is Unreliable in Heuristic Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.24300) |

#### Candidate Generation

##### Proposal Design

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Promptbreeder: Self-referential self-improvement via prompt evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.16797) |
| 2024 | Self-play fine-tuning converts weak language models to strong language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.01335) |
| 2025 | Alphaevolve: A coding agent for scientific and algorithmic discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13131) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | BenchEvolver: Frontier Task Synthesis via Solution-Centric Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01286) |
| 2026 | D'ejaQ: Open-Ended Evolution of Diverse, Learnable and Verifiable Problems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.01931) |
| 2026 | Evolutionary System Prompt Learning for Reinforcement Learning in LLMs | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.14697) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | Rethinking Self-Evolving Agents: Do We Still Need Prescribed Optimization Pipelines? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.09629) |
| 2026 | TTHE: Test-Time Harness Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.08124) |


### Feedback Stage

#### Execution Environment

##### Environment Execution

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Mlagentbench: Evaluating language agents on machine learning experimentation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.03302) |
| 2024 | Re-bench: Evaluating frontier ai r&d capabilities of language model agents against human experts | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.15114) |
| 2026 | A-Evolve-Training: Autonomous Post-Training of a 30B Model | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20657) |
| 2026 | AutoTrainess: Teaching Language Models to Improve Language Models Autonomously | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.31551) |
| 2026 | BaT: Towards Self-Evolving Medical Research Agent with Stage Rubrics | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.16211) |
| 2026 | CLAP: Closed-Loop Training, Evaluation, and Release Control for Domain Agent Post-training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.01846) |
| 2026 | Do Coding Agents Understand Least-Privilege Authorization? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.14859) |
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |
| 2026 | Mars: Modular agent with reflective search for automated ai research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02660) |
| 2026 | PostTrainBench: Can LLM Agents Automate LLM Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08640) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | Scaling Automatic Research Agents via World Models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12564) |
| 2026 | Synthetic sandbox for training machine learning engineering agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04872) |

##### Long-Horizon Interaction

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | BoxingGym: Benchmarking progress in automated experimental design and model discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.01540) |
| 2026 | ClawMark: A Living-World Benchmark for Multi-Turn, Multi-Day, Multimodal Coworker Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.23781) |
| 2026 | VibeLifeBench: Can Your Life Agent Be Proactive and Persistent in a Living World? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10875) |

#### Verification Signal

##### Judge design

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | AI control: Improving safety despite intentional subversion | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.06942) |
| 2023 | Weak-to-strong generalization: Eliciting strong capabilities with weak supervision | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.09390) |
| 2024 | Llm critics help catch llm bugs | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.00215) |
| 2024 | Prover-verifier games improve legibility of llm outputs | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.13692) |
| 2025 | Efficient process reward model training via active learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.10559) |
| 2025 | EvilGenie: A reward hacking benchmark | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.21654) |
| 2025 | Towards self-evolving benchmarks: Synthesizing agent trajectories via test-time exploration under validate-by-reproduce paradigm | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.00415) |
| 2026 | Can LLM-as-a-Judge Reliably Verify Rubrics in Agentic Scenarios? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29920) |
| 2026 | EVOMAL: Self-Poisoning in Self-Evolving Coding Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.25776) |
| 2026 | From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.23802) |
| 2026 | Judge, Retrieve, or Abstain: Uncertainty-Guarded LLM Judging with Provable Risk Guarantees | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.17994) |
| 2026 | Library drift: Diagnosing and fixing a silent failure mode in self-evolving LLM skill libraries | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19576) |
| 2026 | MAS-ProVe: Understanding the process verification of multi-agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.03053) |
| 2026 | Reasoning Jury: Multi-Model Consensus for Evaluating Reasoning Traces | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12585) |
| 2026 | Recursive Self-Evolving Agents via Held-Out Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.28374) |
| 2026 | Reward hacking benchmark: measuring exploits in LLM agents with tool use | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.02964) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | Self-Trained Verification for Training-and Test-Time Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30290) |
| 2026 | The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.26294) |
| 2026 | Two-Level Meta-Rubrics for Evaluating Open-Ended Generation: GAMUT, a Benchmark for Factual Completeness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.19322) |
| 2026 | Who Grades the Grader? Co-Evolving Evaluation Metrics and Skills for Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12790) |

##### Reference annotation

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2025 | Towards self-evolving benchmarks: Synthesizing agent trajectories via test-time exploration under validate-by-reproduce paradigm | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.00415) |
| 2026 | AEVAL: From Anecdotal to Deterministic Testing for Agentic Skill Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.16345) |
| 2026 | AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12925) |
| 2026 | Claw-eval-live: A live agent benchmark for evolving real-world workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28139) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### Rubric creation

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Rubric-conditioned LLM grading: Alignment, uncertainty, and robustness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.08843) |
| 2026 | ARES: Automated Rubric Synthesis for Scalable LLM Reinforcement Learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.23454) |
| 2026 | EvoRubric: Self-Evolving Rubric-Driven RL for Open-Ended Generation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29847) |
| 2026 | Feedback-to-Rubrics: Can We Learn Expert Criteria from Inline Comments? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29857) |
| 2026 | From Holistic Evaluation to Structured Criteria: Rubrics Across the Evolving LLM Landscape | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08625) |
| 2026 | From rubrics to reliable scores: Evidence-grounded text evaluation with llm judges | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.08654) |
| 2026 | Many Voices, One Reward: Multi-Role Rubric Generation for LLM Judging and Reward Modeling | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.01830) |
| 2026 | Rubric-as-Experts: Case-Specific MQM Rubrics for Translation Quality Evaluation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.21559) |
| 2026 | RubricBench: Aligning model-generated rubrics with human standards | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.01562) |
| 2026 | Rubriceval: A rubric-level meta-evaluation benchmark for llm judges in instruction following | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25133) |
| 2026 | Rubrics as an attack surface: Stealthy preference drift in LLM judges | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.13576) |
| 2026 | Rubrics on Trial: Evolving Rubrics from a Single Query via Synthetic Pairwise Evidence | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.15092) |
| 2026 | Step-wise rubric rewards for llm reasoning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.17291) |
| 2026 | Support Vector Rubrics: Closing the Gap Between Self-Generated and Human Rubrics | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08077) |

##### Key challenge

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Reward under attack: Analyzing the robustness and hackability of process reward models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.06621) |
| 2026 | Rubric Dropout: A Simple Way to Mitigate Reward Hacking in Rubric-as-Reward RL | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.11669) |
| 2026 | Self-Authored Verification Is Unreliable in Heuristic Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.24300) |
| 2026 | The Blind Curator: How a Biased Judge Silently Disables Skill Retirement in Self-Evolving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.07436) |
| 2026 | Who Grades the Grader? Co-Evolving Evaluation Metrics and Skills for Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12790) |


### Optimization Stage

#### Memory Update

##### Overview

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | MEGA: Self-Evolving Agent Optimization Infrastructure via Wisdom Graph | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10504) |
| 2026 | WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.27454) |

##### Memory reuse

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Lifelongagentbench: Evaluating llm agents as lifelong learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |
| 2026 | EVOMAL: Self-Poisoning in Self-Evolving Coding Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.25776) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | Library drift: Diagnosing and fixing a silent failure mode in self-evolving LLM skill libraries | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19576) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### Memory tracking

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Towards self-evolving benchmarks: Synthesizing agent trajectories via test-time exploration under validate-by-reproduce paradigm | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.00415) |
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### Memory writing

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Memgpt: Towards llms as operating systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08560) |
| 2023 | Voyager: An open-ended embodied agent with large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | MEGA: Self-Evolving Agent Optimization Infrastructure via Wisdom Graph | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10504) |
| 2026 | SkillMaster: Toward Autonomous Skill Mastery in LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08693) |

##### Key challenge

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Voyager: An open-ended embodied agent with large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) |
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |
| 2026 | Library drift: Diagnosing and fixing a silent failure mode in self-evolving LLM skill libraries | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19576) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

#### Update Policy

##### Overview

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | PACEvolve++: Improving Test-time Learning for Evolutionary Search Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.07039) |
| 2026 | Rethinking Self-Evolving Agents: Do We Still Need Prescribed Optimization Pipelines? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.09629) |
| 2026 | SIA: Self Improving AI with Harness & Weight Updates | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27276) |
| 2026 | The Optimizer Is the Agent: Reasoning-Driven Search across Prompts, Programs, and ML Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.06714) |

##### State Transition

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | AI control: Improving safety despite intentional subversion | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.06942) |
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | CLAP: Closed-Loop Training, Evaluation, and Release Control for Domain Agent Post-training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.01846) |
| 2026 | Do Coding Agents Understand Least-Privilege Authorization? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.14859) |
| 2026 | Evo-harness: Context-to-harness skill compilation for self-evolving agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.15071) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02276) |
| 2026 | HELIX: Model-Harness Co-evolution for Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13951) |
| 2026 | No Time Like the Present: Agentic Test-Time Training for LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.03441) |
| 2026 | Recursive Self-Evolving Agents via Held-Out Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.28374) |
| 2026 | Rethinking Self-Evolving Agents: Do We Still Need Prescribed Optimization Pipelines? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.09629) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | SIA: Self Improving AI with Harness & Weight Updates | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27276) |
| 2026 | SkillMaster: Toward Autonomous Skill Mastery in LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08693) |

##### Update Rule

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | A-Evolve-Training: Autonomous Post-Training of a 30B Model | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20657) |
| 2026 | AutoTrainess: Teaching Language Models to Improve Language Models Autonomously | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.31551) |
| 2026 | Cooperative Coevolution for Resource-Constrained Agentic LLM Post-Training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02391) |
| 2026 | Evo-harness: Context-to-harness skill compilation for self-evolving agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.15071) |
| 2026 | EvoDrive: Pareto Evolution for Safety-Critical Autonomous Driving via Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03678) |
| 2026 | EXG: Self-Evolving Agents with Experience Graphs | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.17721) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | ExpGraph: Model-Agnostic Experience Learning with Graph-Structured Memory for LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30712) |
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |
| 2026 | Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02276) |
| 2026 | HELIX: Model-Harness Co-evolution for Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13951) |
| 2026 | MEGA: Self-Evolving Agent Optimization Infrastructure via Wisdom Graph | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10504) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | No Time Like the Present: Agentic Test-Time Training for LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.03441) |
| 2026 | PACEvolve++: Improving Test-time Learning for Evolutionary Search Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.07039) |
| 2026 | Rethinking Self-Evolving Agents: Do We Still Need Prescribed Optimization Pipelines? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.09629) |
| 2026 | Self-Improving Large Language Models via Progressive Experience Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02139) |
| 2026 | SIA: Self Improving AI with Harness & Weight Updates | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27276) |
| 2026 | SkillMaster: Toward Autonomous Skill Mastery in LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08693) |
| 2026 | Skillrl: Evolving agents via recursive skill-augmented reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08234) |
| 2026 | The Optimizer Is the Agent: Reasoning-Driven Search across Prompts, Programs, and ML Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.06714) |


## 3. Frontier Dimensions

Seven open problems that bound modern RSI, each with its RSI-core methods and diagnostics.

### Reliability of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Agent2world: Learning to generate symbolic world models via adaptive multi-agent feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.22336) |
| 2025 | Efficient process reward model training via active learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.10559) |
| 2025 | EvilGenie: A reward hacking benchmark | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.21654) |
| 2025 | Towards self-evolving benchmarks: Synthesizing agent trajectories via test-time exploration under validate-by-reproduce paradigm | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.00415) |
| 2026 | AEVAL: From Anecdotal to Deterministic Testing for Agentic Skill Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.16345) |
| 2026 | AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12925) |
| 2026 | Can LLM-as-a-Judge Reliably Verify Rubrics in Agentic Scenarios? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29920) |
| 2026 | Can LLMs Write Reliable Rubrics? A Meta-Evaluation for Experiment Reproduction | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12835) |
| 2026 | Claw-eval-live: A live agent benchmark for evolving real-world workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28139) |
| 2026 | EVOMAL: Self-Poisoning in Self-Evolving Coding Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.25776) |
| 2026 | Judge, Retrieve, or Abstain: Uncertainty-Guarded LLM Judging with Provable Risk Guarantees | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.17994) |
| 2026 | Library drift: Diagnosing and fixing a silent failure mode in self-evolving LLM skill libraries | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19576) |
| 2026 | LLM-as-a-Judge Is Not an Oracle: Why Self-Improving Agents Need Deterministic Guardrails | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2609.02246) |
| 2026 | On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.18066) |
| 2026 | Phantom Gains: Auditing Self-Improvement Against a Measured Null | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.20290) |
| 2026 | Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12851) |
| 2026 | Reasoning Jury: Multi-Model Consensus for Evaluating Reasoning Traces | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12585) |
| 2026 | Reward hacking benchmark: measuring exploits in LLM agents with tool use | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.02964) |
| 2026 | Reward under attack: Analyzing the robustness and hackability of process reward models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.06621) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | Rubric Dropout: A Simple Way to Mitigate Reward Hacking in Rubric-as-Reward RL | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.11669) |
| 2026 | Self-Authored Verification Is Unreliable in Heuristic Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.24300) |
| 2026 | Self-Trained Verification for Training-and Test-Time Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30290) |
| 2026 | The Blind Curator: How a Biased Judge Silently Disables Skill Retirement in Self-Evolving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.07436) |
| 2026 | Who Grades the Grader? Co-Evolving Evaluation Metrics and Skills for Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12790) |

### Efficiency of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | A self-improving coding agent | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.15228) |
| 2025 | Toward training superintelligent software agents through self-play swe-rl | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.18552) |
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Auto Research for Materials: Auditable AI-Scientist Workflows with Held-Out Transfer | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.17100) |
| 2026 | Group-evolving agents: Open-ended self-improvement via experience sharing | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.04837) |
| 2026 | Harnessx: A composable, adaptive, and evolvable agent harness foundry | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14249) |
| 2026 | HELIX: Model-Harness Co-evolution for Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13951) |
| 2026 | Hyperagents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19461) |
| 2026 | Mendel Gödel Machine: Recursive Self-Improving Coding Agents via Comparative Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07645) |
| 2026 | PACE-Bench: Benchmarking Physics Adaptation via Code Evolution in Dynamic Environments | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.14441) |
| 2026 | Pioneer Agent: Continual Improvement of Small Language Models in Production | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09791) |
| 2026 | PostTrainBench: Can LLM Agents Automate LLM Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08640) |
| 2026 | Recursive Harness Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.15524) |
| 2026 | SBCO: Self-Supervised, Verifier-Grounded Harness Optimization For Planning Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10157) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.26294) |
| 2026 | TRACE: Capability-Targeted Agentic Training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.05336) |

### Diversity of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | The ai scientist-v2: Workshop-level automated scientific discovery via agentic tree search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.08066) |
| 2026 | DarwinX: Evolving Agent Harnesses Through Natural Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07545) |
| 2026 | DIVE: Unlocking Self-Improvement in Frozen Language Models Through Diversity-Driven Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12486) |
| 2026 | EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04968) |
| 2026 | MAS-ProVe: Understanding the process verification of multi-agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.03053) |
| 2026 | Mendel Gödel Machine: Recursive Self-Improving Coding Agents via Comparative Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07645) |
| 2026 | Reward hacking benchmark: measuring exploits in LLM agents with tool use | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.02964) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | Skill Self-Play: Pushing the frontier of LLM capability with co-evolving skills | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.22529) |
| 2026 | The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.26294) |

### Persistence of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AgentDevel: Reframing Self-Evolving LLM Agents as Release Engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04620) |
| 2026 | Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.14611) |
| 2026 | BAITBENCH: Measuring Agent Reward Hacking with Optional Shortcuts Planted in ML Tasks | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.30724) |
| 2026 | Experience Graphs: The Data Foundation for Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29823) |
| 2026 | Harness Updating Is Not Harness Benefit: Disentangling Evolution Capabilities in Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30621) |
| 2026 | Hierarchical Self-Improvement: A Framework for Task-Specific Evolvable Agent Harnesses | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.08466) |
| 2026 | Knowledge-Centric Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.19592) |
| 2026 | Library drift: Diagnosing and fixing a silent failure mode in self-evolving LLM skill libraries | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19576) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.18066) |
| 2026 | Past-bench: Benchmarking the foundations of recursive self-improvement in personal agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04003) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | S3Gym: Can LLMs Turn Self-Testing and Self-Judging into Self-Improvement? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.31100) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | Self-Improving AI Coding Agents Through Accumulated Behavioral Rules: A Closed-Loop Framework | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.13091) |
| 2026 | Self-Improving Large Language Models via Progressive Experience Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02139) |
| 2026 | Tree-of-Experience: Hierarchical Experience Management for Self-Evolving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.09044) |
| 2026 | WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.27454) |

### Adaptability of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | AEVAL: From Anecdotal to Deterministic Testing for Agentic Skill Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.16345) |
| 2026 | AgentStream: How Well Do Self-Evolving LLM Agents Perform Under Streaming Tasks? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.00155) |
| 2026 | Claw-eval-live: A live agent benchmark for evolving real-world workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28139) |
| 2026 | ClawMark: A Living-World Benchmark for Multi-Turn, Multi-Day, Multimodal Coworker Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.23781) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | Self-Trained Verification for Training-and Test-Time Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30290) |
| 2026 | The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.26294) |
| 2026 | VibeLifeBench: Can Your Life Agent Be Proactive and Persistent in a Living World? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10875) |
| 2026 | Who Grades the Grader? Co-Evolving Evaluation Metrics and Skills for Self-Improving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12790) |

### Controllability of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | AI control: Improving safety despite intentional subversion | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.06942) |
| 2026 | Auditing Harness Tampering in Self-Improving Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2609.00069) |
| 2026 | Do Coding Agents Understand Least-Privilege Authorization? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.14859) |
| 2026 | HELIX: Model-Harness Co-evolution for Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13951) |
| 2026 | Mendel Gödel Machine: Recursive Self-Improving Coding Agents via Comparative Evolution | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.07645) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | Recursive Harness Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.15524) |
| 2026 | SIA: Self Improving AI with Harness & Weight Updates | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27276) |

### Generalization of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Mlagentbench: Evaluating language agents on machine learning experimentation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.03302) |
| 2024 | Re-bench: Evaluating frontier ai r&d capabilities of language model agents against human experts | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.15114) |
| 2025 | Agent2world: Learning to generate symbolic world models via adaptive multi-agent feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.22336) |
| 2025 | Efficient process reward model training via active learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.10559) |
| 2026 | Are LLMs Ready for Scientific Discovery? A Capability-Oriented Benchmark for AI Scientists | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.11079) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | Auto Research for Materials: Auditable AI-Scientist Workflows with Held-Out Transfer | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.17100) |
| 2026 | AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25256) |
| 2026 | ClawMark: A Living-World Benchmark for Multi-Turn, Multi-Day, Multimodal Coworker Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.23781) |
| 2026 | Phantom Gains: Auditing Self-Improvement Against a Measured Null | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.20290) |
| 2026 | Recursive Self-Evolving Agents via Held-Out Selection | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.28374) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |
| 2026 | SciIntegrity-Bench: A Benchmark for Evaluating Academic Integrity in AI Scientist Systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.10246) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2026 | Training AI Scientists to Replicate Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13331) |
