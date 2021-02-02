import { Timeline } from "./plugins/timeline";
import "./index.css";

const popup = document.getElementById("timeline-wrapper");
const titles = document.getElementsByClassName("title");
let timeline;

const seqCount = {
  "INT3D-77-EarlyMeiosis1": 400,
  "INT3D-78-LateMeiosis1": 440,
  "INT3D-79-EarlyMeiosis2": 251,
  "INT3D-80-LateMeiosis2": 504,
  "INT3D-119-Allphasesofmeiosis": 1594,
}

const showVideo = (id) => {
  popup.classList.add("opened");

  timeline = new Timeline({
    containerId: "timeline",
    namePattern: id,
    fileExtension: "jpg",
    framesCount: seqCount[id],
    framesFolder: `/static/${id}`,
    fps: 30
  });

  timeline.init();
};

const closePopUp = () => {
  if (popup.classList.contains("opened")) {
    popup.classList.remove("opened");
    timeline.destroy();
  }
}

for (let title of titles) {
  title.addEventListener("click", () => {
    showVideo(title.getAttribute("data-point"))
  });
}

document.getElementById("closeButton").addEventListener("click", () => {
  closePopUp();
});
