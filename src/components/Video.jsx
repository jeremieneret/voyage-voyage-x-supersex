import ReactPlayer from "react-player"

export default function Video() {

  return <>
    <div className="video">
      <ReactPlayer
        url='https://player.vimeo.com/video/952098282?h=fd31c33292'
        controls
        playing
        width='100vw'
        height='100vh'
        allowFullScreen
        // requestFullscreen
      />
    </div>
  </>
}