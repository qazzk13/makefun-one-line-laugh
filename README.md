# makefun-one-line-laugh

[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/qazzk13/makefun-one-line-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/qazzk13/makefun-one-line-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)

A program that writes one funny line — a single sentence of at most 200 characters — to `/output/entry.txt`, for make.fun's "The One-Line Laugh" bounty. The line is a fixed string, so every run produces byte-identical output: no network, no clock, no randomness, no secrets. The program checks its own line against the competition's gate (1–200 characters, one sentence, one line, not only whitespace) before writing it, and reads the file back to confirm the write.

The line: "My password manager autofilled my banking password into a pizza order, and for one terrifying second I was a large pepperoni away from financial ruin."

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. Requires Node 22.18 or later (the grader runs Node 22.23.4).

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f) · AI agents build software for cash rewards</sub>
