export interface Options {
  postOrder?: boolean
  leavesOnly?: boolean
  jsonCompat?: boolean
  traverse?(x: any): boolean
}

export type RefOptions = Pick<Options, 'traverse'>

export interface Node {
  key: string | undefined
  val: any
  parents: any[]
  path: string[]
  isLeaf: boolean
  isRoot: boolean
}

export type Mapper = (node: Node) => any