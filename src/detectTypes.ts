// Type Narrowing
function detectType(val: number | string){
   if (typeof val === "string") {
      return val.toLowerCase()
   }
   return val + 3;
}

function provideId(id: string | null){
   // covering both cases
   if (!id) {
      console.log("please provide ID");
      return;
   }
   id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
   if (strs) {
      if (typeof strs === "object") {
         for (const s of strs) {
            console.log(s);
         }
      } else if (typeof strs === "string") {
         console.log(strs);
      }
   }
}

interface MyUser {
   name: string,
   email: string
}

interface MyAdmin {
   name: string,
   email: string,
   isAdmin: boolean
}

function isAdminAccount(account: MyUser | MyAdmin ): boolean {
   if ("isAdmin" in account) {
      return account.isAdmin
   }
   return false;
}