import { type Exp } from "./Exp.ts"

export function formatExp(exp: Exp): string {
  switch (exp.kind) {
    case "Var": {
      return exp.name
    }

    case "Int": {
      return exp.value.toString()
    }

    case "Prim": {
      const args = exp.args.map(formatExp).join(" ")
      return `(${exp.op} ${args})`
    }

    case "Let": {
      const rhs = formatExp(exp.rhs)
      const body = formatExp(exp.body)
      return `(let ([${exp.name} ${rhs} ${body}]))`
    }
  }
}
