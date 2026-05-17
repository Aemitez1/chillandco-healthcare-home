# Feature-Based Pattern

## Structure

All features live under `features/<name>/` with these allowed subdirectories:

```
features/<name>/
  components/   ← React components + co-located .hook.ts files
  types/
  constants/
  schemas/
```

## Rules

- `.hook.ts` files co-locate inside `components/` next to the component they serve
- Shared UI primitives (shadcn, etc.) → `components/ui/`
- App-wide shared components → `shared/components/`
- No new top-level feature folder without a `/grill-me` session first
