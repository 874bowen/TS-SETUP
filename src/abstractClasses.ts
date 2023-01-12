abstract class TakePhotos {
   constructor(
      public cameraMode: string,
      public filter: string
   ){
   }
   
   abstract getSepia(): void


}

// const ian = new TakePhoto("test", "Test")

class Insta extends TakePhotos {
   constructor(
      public cameraMode: string,
      public filter: string,
      public instaStory: string
   ){
      super(cameraMode, filter);
   }

   getSepia(): void {
      console.log("This is the Sepia filter");
   }
}

const it = new Insta("Ivan", "", "")

it.getSepia();