import { type Int, type Var } from "./Exp.ts"

export type Atom = Var | Int
export type CExp = Atom | CPrim
export type CPrim = { kind: "Prim"; op: string; args: Array<Atom> }
