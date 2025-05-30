export type Exp = Var | Int | Prim | Let
export type Var = { kind: "Var"; name: string }
export type Int = { kind: "Int"; value: number }
export type Prim = { kind: "Prim"; op: string; args: Array<Exp> }
export type Let = { kind: "Let"; name: string; rhs: Exp; body: Exp }
