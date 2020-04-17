## Next + Prisma 2 + Now + SQLite

Example using Next and Prisma with SQLite.

As Now uses Lambda under the hood and Lambda only allows writing to `/tmp`, we download a sqlite file into `/tmp`.
Note, that you can also tell Now in the Now config, to include the sqlite file in the bundle.
However, I have no idea how to do that together with Next.js, so I'm just downloading the file :shrug:

[You can check it out here](https://next-prisma2-now.timsuchanek.now.sh/)
