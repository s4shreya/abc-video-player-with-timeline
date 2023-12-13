# Video Player with timeline
A responsive Video player React application that seeks to the position in the video and plays from that time selected from the timeline. It displays a description of the video playing, a timeline of the video events that contains images and position and a video player that plays the video.

## Features of the application
* A video player that displays the poster, has video controls and starts playing on user click.
* Displays a scrollable timeline that consists of a thumbnail image and the position of that image in the video.
* Upon clicking on the position in the timeline:
  * it seeks to that time on the video and continues playing from there.
  * it displays the entities of that timeline that consist of:
    * cropped image from that frame
    * Object title
    * Object type
    * Emotion profile
* Description of the playing video such as title, duration, episode, summary and total timeline entities.
* Timeline JSON data is fetched using axios from the backend node.js server.
* Responsive web application built with Mobile first approach that adapts to different screen sizes of mobiles, tablets and laptops.

### Live Demo
https://video-player-with-timeline-frontend.vercel.app/

### Installation

```
git clone https://github.com/s4shreya/abc-video-player-with-timeline.git

npm install

npm run dev / npm run build
```
