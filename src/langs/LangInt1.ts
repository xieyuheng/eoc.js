import { type Exp, type Program } from "../syntax/index.ts"

export function evaluateProgram(program: Program): number {
  return evaluateExp(program.body)
}

export function evaluateExp(exp: Exp): number {
  switch (exp.kind) {
    case "Int": {
      return exp.value
    }

    case "Prim": {
      switch (exp.op) {
      }
    }

    default: {
      throw new Error("evaluateExp unhandled case")
    }
  }
}
