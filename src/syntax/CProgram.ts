import { type CExp } from "./CExp.ts"
import { type Var } from "./Exp.ts"
import { type Info } from "./Program.ts"

export type Stmt = { kind: "Assign"; lhs: Var; rhs: CExp }
export type Tail =
  | { kind: "Return"; exp: CExp }
  | { kind: "Seq"; stmt: Stmt; tail: Tail }
export type CProgram = { kind: "Program"; info: Info; tail: Tail }
