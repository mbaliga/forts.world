# Unit kit data

- `parts.json`: array of parts. Fields: `id`, `layer` (garment|armour|headgear|weapon|shield|ranged|mount|tack),
  `name`, `socket` (weapon_R|weapon_L|shield|head|torso|…|null), `regions` (periods/places), `proc` (procedural recipe
  name understood by the builder, optional), `dims_m` (optional, real size), `materials` (list), `evidence`
  (documented|inferred|placeholder|needs-source), `sources` (list of {title,url?,licence?}), `gaps` (what is missing).
- `loadouts.json`: array of soldiers. Fields: `id`, `name`, `region`, `period`, `role`, `body` ({cut,skin}),
  `palette` ({top,bottom,sash,hat}), `garment`, `armour[]`, `headgear`, `main_hand`, `off_hand`, `ranged`,
  `mount` (id or null) with `crew` count, `evidence` (worst tag among parts, computed), `notes`.
- All part ids referenced by a loadout must exist in `parts.json`. `tools/units/validate-kit.mjs` checks this and
  computes each loadout's evidence as the weakest tag among its parts.
- Nothing in the seed is `documented` yet: every part is `needs-source` until a source row is added.
