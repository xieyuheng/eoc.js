export type Exp = Var | Int | Prim | Let

export type Var = {
  "@type": "Exp"
  "@kind": "Var"
  name: string
}

export function Var(name: string): Var {
  return {
    "@type": "Exp",
    "@kind": "Var",
    name,
  }
}

export type Int = {
  "@type": "Exp"
  "@kind": "Int"
  value: number
}

export function Int(value: number): Int {
  return {
    "@type": "Exp",
    "@kind": "Int",
    value,
  }
}

export type Prim = {
  "@type": "Exp"
  "@kind": "Prim"
  op: string
  args: Array<Exp>
}

export function Prim(op: string, args: Array<Exp>): Prim {
  return {
    "@type": "Exp",
    "@kind": "Prim",
    op,
    args,
  }
}

export type Let = {
  "@type": "Exp"
  "@kind": "Let"
  name: string
  rhs: Exp
  body: Exp
}

export function Let(name: string, rhs: Exp, body: Exp): Let {
  return {
    "@type": "Exp",
    "@kind": "Let",
    name,
    rhs,
    body,
  }
}
