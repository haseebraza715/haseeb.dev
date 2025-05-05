---
date: '2025-03-15'
title: 'Easter Bunny King'
github: 'https://github.com/haseebraza715/Easter-Bunny-king'
tech:
  - C
  - Process Management
  - Signals & Pipes
  - File I/O
  - Linux-Compatible
---

🐰 A fun C-based command-line program that simulates a springtime bunny poetry contest! Bunny contestants register with their names and poems, then compete by "watering" — reciting poems to earn red eggs. Using Linux system calls (`fork`, `signal`, `pipe`), each child process sends egg counts to the parent, which updates a file-based leaderboard and declares the Easter Bunny King. All data is stored persistently, and the application supports full bunny management: add, list, modify, and delete.
