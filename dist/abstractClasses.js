"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const ian = new TakePhoto("test", "Test")
class Insta extends TakePhotos {
    constructor(cameraMode, filter, instaStory) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.instaStory = instaStory;
    }
    getSepia() {
        console.log("This is the Sepia filter");
    }
}
const it = new Insta("Ivan", "", "");
it.getSepia();
