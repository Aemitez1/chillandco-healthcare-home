# Wellness

Internal web app covering diseases and exercises, with i18n and dark mode support.

## Tech Stack

| Layer | Package |
|-------|---------|
| Framework | Next.js 16.2.6 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui, Base UI |
| Icons | lucide-react |
| i18n | next-intl 4 |
| Theming | next-themes |

## Getting Started

```bash
git clone <repo>
cd wellness

pnpm install

cp .env.example .env.local
# Set NEXT_PUBLIC_BASE_URL in .env.local

pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Default | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_BASE_URL` | `http://localhost:3000` | Yes |

## Feature Structure

All features live under `features/<name>/`:

```
features/<name>/
  components/     ← React components + co-located .hook.ts files
  types/
  constants/
  schemas/
```

Shared UI primitives → `components/ui/`
App-wide shared components → `shared/components/`

## Claude Code Skills

This project uses Claude Code skills. Install them before working with AI agents:

```bash
claude install caveman
claude install grill-me
claude install next-best-practices
claude install tdd
```

| Skill | Purpose |
|-------|---------|
| `caveman` | Ultra-compressed communication mode |
| `grill-me` | Stress-test plans before implementing |
| `next-best-practices` | Next.js file conventions and patterns |
| `tdd` | Red-green-refactor TDD loop |

## Workflow

**New feature or integration** (new lib, API, external service):
1. Enter plan mode
2. Run `/grill-me` to resolve design decisions
3. Implement only after plan is approved

**Bug fix / small edit** — implement directly, no plan needed.
