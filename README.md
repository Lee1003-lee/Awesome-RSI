# Towards AI That Improves Itself: A Survey of Recursive Self-Improvement

> 📚 An **Awesome List** of Recursive Self-Improvement (RSI)-related papers (methods, systems, benchmarks, verifiers, and safety work) organized by **Background and Motivation**, the **RSI Framework**, **Evolution Families**, and **Frontier Dimensions**.

A curated, structured bibliography for *Towards AI That Improves Itself: A Survey of Recursive Self-Improvement*. The survey anchors RSI in **state inheritance** (an accepted improvement from one cycle becomes part of the starting state of a later improvement cycle) and distinguishes four stages: **evolution, self-evolution, meta-evolution, and recursive self-improvement**. **Minimal RSI denotes recursive state inheritance, while recursive progress denotes improvement of the improver itself; the latter is the stronger claim and the primary target of the survey.** The taxonomy below is therefore not an RSI certification list: many papers are included because they provide mechanisms, benchmarks, or safety evidence that can appear inside an RSI loop, not because they all support the same claim strength. Papers may appear in multiple sections when they contribute to multiple stages, targets, or evidence dimensions. Papers are organized along the survey's writing path: **Background and Motivation**, **RSI Framework** (the four stages and the Proposal → Feedback → Optimization loop), **Evolution Families** (what is evolved), and **Frontier Dimensions** (open problems).

<!-- badges -->
<p align="center">
  <a href="https://lee1003-lee.github.io/Awesome-RSI-Research/"><img src="https://img.shields.io/badge/Website-Live-0B6B65?style=flat-square" alt="Website"></a>
  <a href="assets/rsi-survey.pdf"><img src="https://img.shields.io/badge/Paper-PDF-A42C25?style=flat-square" alt="Paper"></a>
  <a href="https://github.com/Lee1003-lee/Awesome-RSI-Research"><img src="https://img.shields.io/badge/PRs-welcome-6B7280?style=flat-square" alt="Contributions"></a>
</p>

<p align="center">
  <img src="assets/rsi-teaser.png" alt="Recursive self-improvement survey teaser" width="100%">
</p>

## Contents

1. [Background and Motivation](#1-background-and-motivation): Historical roots, bounded ML improvement, and recent RSI context
2. [RSI Framework](#2-rsi-framework): Four stages + Proposal / Feedback / Optimization + evidence boundaries
3. [Evolution Families](#3-evolution-families): Behavior, Agent-System, Model & Data, Research-Process; taxonomy is not certification
4. [Frontier Dimensions](#4-frontier-dimensions): Reliability → Generalization

## 1. Background and Motivation

These papers provide the conceptual and technical roots for the survey before the RSI framework and taxonomy.

### Historical Roots and RSI Motivation

| Date | Title | Paper |
|:----:|:------|:-----:|
| 1950 | Computing machinery and intelligence |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1093/mind/LIX.236.433) |
| 1966 | Speculations concerning the first ultraintelligent machine |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1016/S0065-2458%2808%2960418-0) |
| 2008 | Artificial intelligence as a positive and negative factor in global risk |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://intelligence.org/files/AIPosNegFactor.pdf) |
| 2012 | Darwin among the machines: The evolution of global intelligence |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.penguinrandomhouse.com/books/43051/darwin-among-the-machines-by-george-dyson/) |
| 2014 | Superintelligence: Paths, Dangers, and Strategies |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://global.oup.com/academic/product/superintelligence-9780198739838) |
| 2017 | Mastering the game of go without human knowledge |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1038/nature24270) |
| 2018 | A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1126/science.aar6404) |
| 2018 | The basic AI drives |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://selfawaresystems.files.wordpress.com/2008/01/ai_drives_final.pdf) |

### Bounded Improvement in Machine Learning

| Date | Title | Paper |
|:----:|:------|:-----:|
| 1995 | Temporal difference learning and TD-Gammon |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1145/203330.203343) |
| 2009 | Curriculum learning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1145/1553374.1553380) |
| 2012 | Practical bayesian optimization of machine learning algorithms |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://proceedings.neurips.cc/paper/2012/hash/05311655a15b75fab86956663e1819cd-Abstract.html) |
| 2012 | Random search for hyper-parameter optimization |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.jmlr.org/papers/v13/bergstra12a.html) |
| 2016 | Neural architecture search with reinforcement learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1611.01578) |
| 2017 | Model-agnostic meta-learning for fast adaptation of deep networks |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1703.03400) |
| 2017 | Population based training of neural networks | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1711.09846) |
| 2019 | AI-GAs: AI-generating algorithms, an alternate paradigm for producing general artificial intelligence | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1905.10985) |
| 2019 | Automated machine learning: methods, systems, challenges |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://link.springer.com/book/10.1007/978-3-030-05318-5) |
| 2019 | Neural architecture search: A survey |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.jmlr.org/papers/v20/18-598.html) |
| 2020 | Enhanced poet: Open-ended reinforcement learning through unbounded invention of learning challenges and their solutions |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1901.01753) |
| 2021 | Meta-learning in neural networks: A survey |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2004.05439) |
| 2022 | Star: Bootstrapping reasoning with reasoning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2203.14465) |

### Agentic Foundations and Recent RSI Context

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2022 | React: Synergizing reasoning and acting in language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.03629) |
| 2023 | Direct preference optimization: Your language model is secretly a reward model |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.18290) |
| 2023 | Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.05685) |
| 2023 | Reflexion: Language agents with verbal reinforcement learning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.11366) |
| 2023 | Self-instruct: Aligning language models with self-generated instructions |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2212.10560) |
| 2023 | Toolformer: Language models can teach themselves to use tools |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2302.04761) |
| 2024 | Critic: Large language models can self-correct with tool-interactive critiquing |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.11738) |
| 2024 | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.15793) |
| 2025 | Aflow: Automating agentic workflow generation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.10762) |
| 2025 | Automated design of agentic systems |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.08435) |
| 2025 | Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.04444) |
| 2025 | LiveBench: A challenging, contamination-limited LLM benchmark |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.19314) |
| 2025 | Mle-bench: Evaluating machine learning agents on machine learning engineering |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.07095) |
| 2025 | OpenHands: An Open Platform for AI Software Developers as Generalist Agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.16741) |
| 2026 | Accelerating scientific discovery with Co-Scientist |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1038/s41586-026-10644-y) |
| 2026 | Darwin Gödel machine: open-ended evolution of self-improving agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.22954) |
| 2026 | Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.07663) |
| 2026 | Rethinking the evaluation of harness evolution for agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.12227) |
| 2026 | Self-Improvements in Modern Agentic Systems: A Survey | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.13104) |
| 2026 | Self-adapting language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.10943) |
| 2026 | The Economics of Recursive Self-Improvement |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://evals.alignment.org/notes/2026-07-22-economics-of-recursive-self-improvement/) |
| 2026 | Towards end-to-end automation of AI research |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.nature.com/articles/s41586-026-10265-5) |
| 2026 | When AI Builds Itself |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.anthropic.com/institute/recursive-self-improvement) |
| 2026 | Large language models meet nlp: A survey |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12819) |

## 2. RSI Framework

The survey distinguishes four evolution stages (**evolution, self-evolution, meta-evolution, and recursive self-improvement**) and anchors RSI in **state inheritance**. Evolution improves the current artifact; self-evolution retains an accepted improvement for later tasks or runs; meta-evolution changes the mechanism that proposes, evaluates, selects, or applies later improvements; and RSI requires a later improvement cycle to inherit and build on an accepted prior improvement. Recursive progress is the stronger claim that this inherited state improves the later improver itself. Papers in this section are organized by the Proposal → Feedback → Optimization loop, decomposed into its six components.

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
| 2026 | AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Moss: Self-evolution through source-level rewriting in autonomous agent systems | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22794) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |

##### Target Persistence

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | Voyager: An open-ended embodied agent with large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) |
| 2024 | Self-rewarding language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.10020) |
| 2024 | The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.06292) |
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
| 2025 | DLPO: Towards a Robust, Efficient, and Generalizable Prompt Optimization Framework from a Deep-Learning Perspective. |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.12455) |
| 2025 | Hiagent: Hierarchical working memory management for solving long-horizon agent tasks with large language model |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.09559) |
| 2025 | Meta-rewarding language models: Self-improving alignment with llm-as-a-meta-judge |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.19594) |
| 2024 | Unlocking the capabilities of thought: A reasoning boundary framework to quantify and optimize chain-of-thought |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.11094) |
| 2026 | Drbench: A realistic benchmark for enterprise deep research |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://openreview.net/forum?id=IGYQ4c92e2) |
| 2026 | Rbf++: Quantifying and optimizing reasoning boundaries across measurable and unmeasurable capabilities for chain-of-thought reasoning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.13307) |

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
| 2026 | Absolute zero: Reinforced self-play reasoning with zero data |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.03335) |
| 2023 | Language agent tree search unifies reasoning acting and planning in language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.04406) |
| 2023 | Tree of thoughts: Deliberate problem solving with large language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.10601) |
| 2026 | Gepa: Reflective prompt evolution can outperform reinforcement learning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.19457) |
| 2023 | Adaplanner: Adaptive planning from feedback with language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16653) |
| 2023 | Describe, explain, plan and select: interactive planning with llms enables open-world multi-task agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2302.01560) |
| 2023 | Reasoning with language model is planning with world model |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.14992) |
| 2024 | Adarefiner: Refining decisions of language models with adaptive feedback |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.17176) |
| 2024 | Statler: State-maintaining language models for embodied reasoning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.17840) |
| 2025 | A multi-AI agent system for autonomous optimization of agentic AI solutions via iterative refinement and LLM-driven feedback loops |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.17149) |
| 2025 | Efficient Real-time Refinement of Language Model Text Generation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.07824) |
| 2025 | Evoagentx: An automated framework for evolving agentic workflows |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.03616) |
| 2025 | Preflexor: Preference-based recursive language modeling for exploratory optimization of reasoning and agentic thinking |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.12375) |
| 2025 | S*: Test Time Scaling for Code Generation. |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.14382) |
| 2026 | Reassessing One-Round Test-Time Refinement for Code Generation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.05006) |

### Feedback Stage

#### Execution Environment

##### Environment Execution

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2023 | MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.03302) |
| 2024 | RE-Bench: Evaluating Frontier AI R&D Capabilities of Language Model Agents Against Human Experts | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.15114) |
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
| 2026 | EnvHarness: Awakening Static Worlds for Agent Learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.19880) |

##### Long-Horizon Interaction

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | BoxingGym: Benchmarking progress in automated experimental design and model discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.01540) |
| 2026 | ClawMark: A Living-World Benchmark for Multi-Turn, Multi-Day, Multimodal Coworker Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.23781) |
| 2026 | VibeLifeBench: Can Your Life Agent Be Proactive and Persistent in a Living World? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.10875) |
| 2020 | Alfworld: Aligning text and embodied environments for interactive learning | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.03768) |
| 2022 | Scienceworld: Is your agent smarter than a 5th grader? |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2203.07540) |
| 2023 | Intercode: Standardizing and benchmarking interactive coding with execution feedback |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.14898) |
| 2023 | Mind2web: Towards a generalist agent for the web |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.06070) |
| 2024 | Agentbench: Evaluating llms as agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.03688) |
| 2024 | Appworld: A controllable world of apps and people for benchmarking interactive coding agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.18901) |
| 2024 | Assistantbench: Can web agents solve realistic and time-consuming tasks? |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.15711) |
| 2024 | Cradle: Empowering foundation agents towards general computer control | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.03186) |
| 2024 | Long-horizon planning for multi-agent robots in partially observable environments |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.10031) |
| 2024 | Osworld: Benchmarking multimodal agents for open-ended tasks in real computer environments |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.07972) |
| 2024 | Tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12045) |
| 2024 | The browsergym ecosystem for web agent research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.05467) |
| 2024 | Weblinx: Real-world website navigation with multi-turn dialogue | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.05930) |
| 2024 | Webvoyager: Building an end-to-end web agent with large multimodal models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.13919) |
| 2024 | WorkArena: How capable are web agents at solving common knowledge work tasks? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.07718) |
| 2025 | Evoagent: Self-evolving agent with continual world model for long-horizon tasks |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.05907) |
| 2025 | MedAgentBench: a virtual EHR environment to benchmark medical LLM agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1056/AIdbp2500144) |
| 2026 | Osworld-mcp: Benchmarking mcp tool invocation in computer-use agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.24563) |
| 2024 | Swe-bench: Can language models resolve real-world github issues? |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06770) |
| 2026 | Swe-bench goes live! |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.23419) |
| 2025 | Text2world: Benchmarking large language models for symbolic world model generation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.13092) |

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
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2025 | Towards self-evolving benchmarks: Synthesizing agent trajectories via test-time exploration under validate-by-reproduce paradigm | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.00415) |
| 2026 | AEVAL: From Anecdotal to Deterministic Testing for Agentic Skill Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.16345) |
| 2026 | AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12925) |
| 2026 | Claw-Eval-Live: A Live Agent Benchmark for Evolving Real-World Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28139) |
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
| 2024 | Gaia: a benchmark for general ai assistants |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.12983) |
| 2024 | Webarena: A realistic web environment for building autonomous agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.13854) |
| 2025 | Benchmarking large language models under data contamination: A survey from static to dynamic evaluation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.08290) |
| 2024 | LLM-rubric: A multidimensional, calibrated approach to automated evaluation of natural language texts |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.17244) |
| 2025 | Do we need a detailed rubric for automated essay scoring using large language models? |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.01035) |
| 2026 | Automated refinement of essay scoring rubrics for language models via reflect-and-revise |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://aclanthology.org/2026.conll-main.47/) |
| 2026 | CDRRM: Contrast-Driven Rubric Generation for Reliable and Interpretable Reward Modeling |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08035) |
| 2026 | Rubricrag: Towards interpretable and reliable llm evaluation via domain knowledge retrieval for rubric generation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.20882) |
| 2026 | iruler: Intelligible rubric-based user-defined llm evaluation for revision |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.12779) |
| 2015 | The lean theorem prover (system description) |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1007/978-3-319-21401-6_26) |
| 2018 | AI safety via debate | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1805.00899) |
| 2023 | Artificial intelligence risk management framework (AI RMF 1.0) |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) |
| 2023 | Selfcheckgpt: Zero-resource black-box hallucination detection for generative large language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.08896) |
| 2024 | Let's verify step by step |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.20050) |
| 2024 | Llms-as-judges: a comprehensive survey on llm-based evaluation methods | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.05579) |
| 2024 | Solving olympiad geometry without human demonstrations |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1038/s41586-023-06747-5) |
| 2025 | Rewardbench: Evaluating reward models for language modeling |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.13787) |

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
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
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
| 2024 | Expel: Llm agents are experiential learners |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.10144) |
| 2026 | How memory management impacts llm agents: An empirical study of experience-following behavior |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16067) |

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
| 2026 | Falsifiable Release Gates for Self-Improving Systems: Standing Invariants at Scale |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.13070) |
| 2026 | Harness AgentTrace |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.harness.io/products/platform/agenttrace) |
| 2026 | Introducing Harness Agent DLC: Extending Your SDLC to AI Agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://www.harness.io/blog/introducing-harness-agent-dlc) |

## 3. Evolution Families

Four targets of RSI-related evolution, following the survey taxonomy. These categories identify what is being evolved; they do not certify that every listed method is an RSI system. Within each sub-category, papers are grouped by *Feedback Pattern*, *Optimization Loops*, and *RSI Target Scope*.

### Behavior Evolution

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
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
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
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26530) |
| 2023 | Self-refine: Iterative refinement with self-feedback |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.17651) |
| 2024 | Chain-of-verification reduces hallucination in large language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.11495) |
| 2024 | Teaching large language models to self-debug |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.05128) |
| 2022 | Constitutional ai: Harmlessness from ai feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2212.08073) |
| 2022 | Self-critiquing models for assisting human evaluators | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2206.05802) |
| 2024 | Selfcheck: Using llms to zero-shot check their own step-by-step reasoning |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.00436) |
| 2026 | The lighthouse of language: Enhancing llm agents via critique-guided improvement |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.16024) |
| 2023 | Can large language models really improve by self-critiquing their own plans? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08118) |
| 2023 | Learning from mistakes via cooperative study assistant for large language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.13829) |
| 2024 | In-context principle learning from mistakes | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.05403) |
| 2024 | Large language models cannot self-correct reasoning yet |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.01798) |
| 2024 | When can llms actually correct their own mistakes? a critical survey of self-correction of llms |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.01297) |
| 2026 | Self-Reference in Large Language Models: The Introspection Threshold for Recursive Self-Improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.04277) |

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
| 2022 | Automatic chain of thought prompting in large language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.03493) |
| 2022 | Self-consistency improves chain of thought reasoning in language models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2203.11171) |
| 2024 | Tree-planner: Efficient close-loop task planning with large language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08582) |
| 2026 | OMIBench: Benchmarking Olympiad-Level Multi-Image Reasoning in Large Vision-Language Models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.20806) |
| 2026 | Towards reasoning era: A survey of long chain-of-thought for reasoning large language models |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.09567) |

### Agent-System Evolution

#### Workflow Evolution

##### Feedback Pattern: Workflow Search and Role Diversity

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | Flex: Continuous agent evolution via forward learning from experience | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.06449) |
| 2026 | AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
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
| 2026 | Self-evolving agents as dynamic graph transformation: A survey and new perspective |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.18104) |
| 2023 | Autogen: Enabling next-gen llm applications via multi-agent conversation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.08155) |
| 2023 | Automatic prompt optimization with “gradient descent” and beam search |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.03495) |
| 2023 | CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.17760) |
| 2024 | Chatdev: Communicative agents for software development |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.07924) |
| 2024 | Large language models as optimizers |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.03409) |
| 2024 | MetaGPT: Meta programming for a multi-agent collaborative framework |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.00352) |
| 2026 | A multi-agent system for automating scientific discovery |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.1038/s41586-026-10652-y) |
| 2026 | Self-Evolving Multi-Agent Systems via Textual Backpropagation |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09046) |
| 2026 | Meta^n: Recursive Self-Improvement through Emergent Depth | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.24735) |
| 2026 | Position: Agentic evolution is the path to evolving llms | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.00359) |

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
| 2026 | Remember me, refine me: A dynamic procedural memory framework for experience-driven agent evolution |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.10696) |
| 2026 | State-Aware Runtime for Long-Horizon LLM Agents: A Conceptual Framework and Research Agenda |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://doi.org/10.33774/coe-2026-vt9t2) |

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
| 2026 | AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |

##### Optimization Loops: Regression Checks and Rollback

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
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
| 2026 | AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13357) |
| 2026 | Code as agent harness | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18747) |
| 2026 | From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06324) |
| 2026 | Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02276) |
| 2026 | Harnessx: A composable, adaptive, and evolvable agent harness foundry | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14249) |
| 2026 | PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26530) |
| 2026 | RSIBench-Data: Benchmarking data-centric research for recursive self-improvement | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25886) |


### Model & Data Evolution

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
| 2023 | Orca: Progressive learning from complex explanation traces of gpt-4 | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.02707) |
| 2023 | Wizardlm: Empowering large language models to follow complex instructions |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.12244) |
| 2024 | Llm2llm: Boosting llms with novel iterative data enhancement |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.15042) |

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
| 2026 | J-Zero: Unified Challenger–Solver–Judge Co-Evolution from Zero Data | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.26582) |

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
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
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
| 2025 | LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11942) |
| 2026 | A-Evolve-Training: Autonomous Post-Training of a 30B Model | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20657) |
| 2026 | Cooperative Coevolution for Resource-Constrained Agentic LLM Post-Training | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.02391) |
| 2026 | Offseeker: Online reinforcement learning is not all you need for deep research agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.18467) |
| 2026 | PostTrainBench: Can LLM Agents Automate LLM Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08640) |
| 2026 | SEAGym: An Evaluation Environment for Self-Evolving LLM Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17546) |
| 2021 | Webgpt: Browser-assisted question-answering with human feedback | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2112.09332) |

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
| 2024 | The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.06292) |
| 2025 | The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.08066) |
| 2026 | Mars: Modular agent with reflective search for automated ai research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02660) |
| 2026 | Scaling Automatic Research Agents via World Models | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.12564) |

#### AI4AI & MLE

##### Feedback Pattern: Training and Search as One Experience Loop

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Frontis-MA1: Training an AI4AI model towards recursive self-improvement in machine learning engineering | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.28568) |

##### Optimization Loops: Experience Inheritance

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2026 | Agent^2 RL-Bench: Can LLM Agents Engineer Agentic RL Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.10547) |
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
| 2025 | Ai4research: A survey of artificial intelligence for scientific research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.01903) |
| 2026 | AutoResearch |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://github.com/karpathy/autoresearch) |
| 2026 | Agent^2 RL-Bench: Can LLM Agents Engineer Agentic RL Post-Training? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.10547) |
| 2025 | Ai scientists fail without strong implementation capability | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01372) |
| 2025 | How far are AI scientists from changing the world? | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.23276) |
| 2026 | Are LLMs Ready for Scientific Discovery? A Capability-Oriented Benchmark for AI Scientists | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.11079) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | Auto Research for Materials: Auditable AI-Scientist Workflows with Held-Out Transfer | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.17100) |
| 2026 | Past-bench: Benchmarking the foundations of recursive self-improvement in personal agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04003) |

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
| 2024 | The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.06292) |
| 2025 | PaperBench: evaluating AI's ability to replicate AI research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.01848) |
| 2025 | The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.08066) |
| 2026 | AREX: Towards a Recursively Self-Improving Agent for Deep Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21461) |
| 2026 | AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25256) |
| 2026 | Mars: Modular agent with reflective search for automated ai research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02660) |
| 2026 | One Interaction Is Worth a Thousand Guesses: Benchmarking the Interactive Capabilities of Deep Research Agents | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.06676) |
| 2026 | Rehearse: Stepping Back from the Confidence Cliff in Self-Improving Autoresearch | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.27687) |
| 2026 | ResearchClawBench: A benchmark for end-to-end autonomous scientific research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07591) |
| 2026 | Training AI Scientists to Replicate Research | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.13331) |
| 2026 | Deepresearch bench: A comprehensive benchmark for deep research agents |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://github.com/Ayanami0730/deep_research_bench) |

##### RSI Target Scope: Research Workspace



## 4. Frontier Dimensions

Seven evidence-oriented properties that bound modern RSI (together an evaluation profile rather than seven independent capabilities), each with its core methods and diagnostics.

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
| 2026 | Claw-Eval-Live: A Live Agent Benchmark for Evolving Real-World Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28139) |
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
| 2020 | Specification Gaming: The Flip Side of AI Ingenuity |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logoColor=white)](https://deepmind.google/blog/specification-gaming-the-flip-side-of-ai-ingenuity/) |
| 2022 | Defining and characterizing reward gaming |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.13085) |
| 2026 | Breaking the Evaluation Paradox: Evaluating High-Entropy Search with Computationally Irreducible Constraints |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.22783) |

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
| 2026 | Huxley-Gödel Machine: Human-level coding agent development by an approximation of the optimal self-improving machine |  [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.21614) |

### Diversity of RSI Systems

| Date | Title | Paper |
|:----:|:------|:-----:|
| 2025 | The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.08066) |
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
| 2026 | Claw-Eval-Live: A Live Agent Benchmark for Evolving Real-World Workflows | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28139) |
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
| 2023 | MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.03302) |
| 2024 | RE-Bench: Evaluating Frontier AI R&D Capabilities of Language Model Agents Against Human Experts | [![Paper](https://img.shields.io/badge/paper-A42C25?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.15114) |
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
