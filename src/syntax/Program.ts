import { type Exp } from "./Exp.ts"

export type Info = {}

export type Program = {
  "@type": "Program"
  info: Info
  body: Exp
}

export function Program(info: Info, body: Exp): Program {
  return {
    "@type": "Program",
    info,
    body,
  }
}
