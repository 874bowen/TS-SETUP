const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
   return val
}

function identity(val: any):any {
   return val;
}

//  like any but the input type and the return type automatically becomes type input (LOCKING THE VALUE)

function identityThree<Type>(val: Type): Type {
   return val;
}

identityThree(true)

function identityFour<T>(val: T): T {
   return val;
}

interface Bootle {
   brand: string,
   type: number
}

class CocaBottle implements Bootle {
   constructor (
      public brand: string,
      public type: number
   ){}

}

const coke = new CocaBottle("cocacola", 6);

identityFour<Bootle>(coke)

// Taking type as array
function getSearchProducts<T>(products: T[]): T{
   const myIndex = 3
   return products[myIndex] /**one of the values in the array */
}

// "<T,>" means this is not a JSX or TSX rather generics in TS
const getMoreSearchProducts = <T,>( products: T[]): T => { 
   const myIndex = 4
   return products[myIndex] 
}