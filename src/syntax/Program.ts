import { type Exp } from "./Exp.ts"

export type Info = {}

export type Program = { kind: "Program"; info: Info; body: Exp }
