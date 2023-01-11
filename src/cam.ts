interface TakePhoto {
   cameraMode: string,
   filter: string,
   burst: number
}

interface Story {
   createStory(): void
}

// interfaces just means must have features
class Instagram implements TakePhoto {
   constructor (
      public cameraMode: string, 
      public filter: string,
      public burst: number
   ){}

}

class YouTube implements TakePhoto, Story {
   constructor (
      public cameraMode: string, 
      public filter: string,
      public burst: number,
      private shorts: string
   ){}

   createStory(): void {
      console.log("Story is being created");
      
   }
}