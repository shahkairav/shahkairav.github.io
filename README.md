# Invariants

Source for [shahkairav.github.io](https://shahkairav.github.io): essays, notes and projects by Kairav Shah. Built with [Astro](https://astro.build); deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Working locally

```sh
npm install
npm run dev       # http://localhost:4321 (search works only after a build)
npm run build     # static site + Pagefind search index in dist/
npm run preview   # serve dist/ locally
```

## Writing

| Kind | Folder | Format |
| --- | --- | --- |
| Essay | `src/content/essays/` | `.mdx` (or `.md`) — full editorial layout, contents list, numbered sections |
| Note | `src/content/notes/` | `.md` — lighter layout, shown in the running log |
| Project | `src/content/projects/` | `.md` — cover image in `public/projects/`, write-up as the body |

Front matter is validated by `src/content.config.ts`. Set `draft: true` to hide an entry; `featured: true` puts an essay (or projects) on the front page. Tags are free-form; each gets a page under `/tags/`.

### In essays (MDX)

```mdx
import Sidenote from '../../components/Sidenote.astro';
import Theorem from '../../components/Theorem.astro';
import Proof from '../../components/Proof.astro';
import PullQuote from '../../components/PullQuote.astro';
import RandomWalk from '../../components/RandomWalk.astro';

Inline math $e^{i\pi} + 1 = 0$, display math with $$ … $$.

A claim.<Sidenote>An aside in the margin.</Sidenote>

<Theorem kind="lemma" title="Optional name">Statement.</Theorem>
<Proof>Argument.</Proof>
```

Theorem kinds: `definition`, `theorem`, `lemma`, `proposition`, `corollary`, `example`, `remark` (each numbered separately). Interactive figures are Astro components with a `<script>`; `src/components/RandomWalk.astro` is the model to copy.

Entries marked `# PLACEHOLDER` in their front matter are sample content to replace.
