function VideoComp() {
  return (
    <div className="w-full h-[540px] flex items-center justify-center mt-4 rounded-20 ">
      <iframe
        src="https://www.youtube.com/embed/dpEPNioJ1Ik"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        height="100%"
        width="100%"
        className="rounded-xl w-[98%] h-full shadow-xl"
      />
    </div>
  );
}

export default VideoComp;
