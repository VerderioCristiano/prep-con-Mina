export interface ListaPokemon {
    count: number
    next: string
    results: Result[]
  }
  
  export interface Result {
    name: string
    url: string
  }
  