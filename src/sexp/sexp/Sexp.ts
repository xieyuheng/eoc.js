import { Span } from "../span/index.ts"

export type Sexp = Cons | Null | Num | Str | Sym

export type Cons = {
  family: "Sexp"
  kind: "Cons"
  head: Sexp
  tail: Sexp
  span: Span
}

export function Cons(head: Sexp, tail: Sexp, span: Span): Cons {
  return {
    family: "Sexp",
    kind: "Cons",
    head,
    tail,
    span,
  }
}

export type Null = {
  family: "Sexp"
  kind: "Null"
  span: Span
}

export function Null(span: Span): Null {
  return {
    family: "Sexp",
    kind: "Null",
    span,
  }
}

export type Num = {
  family: "Sexp"
  kind: "Num"
  value: number
  span: Span
}

export function Num(value: number, span: Span): Num {
  return {
    family: "Sexp",
    kind: "Num",
    value,
    span,
  }
}

export type Str = {
  family: "Sexp"
  kind: "Str"
  value: string
  span: Span
}

export function Str(value: string, span: Span): Str {
  return {
    family: "Sexp",
    kind: "Str",
    value,
    span,
  }
}

export type Sym = {
  family: "Sexp"
  kind: "Sym"
  value: string
  span: Span
}

export function Sym(value: string, span: Span): Sym {
  return {
    family: "Sexp",
    kind: "Sym",
    value,
    span,
  }
}
