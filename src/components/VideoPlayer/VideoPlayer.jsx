const VideoPlayer = () => {
    return (
        <>
            <video autoPlay loop muted className="absolute left-0 top-0 w-full h-full object-cover z-[-50]">
                <source src="/backgrounds/glitter.mp4" type="video/mp4" />
            </video>
        </>
    );
};

export default VideoPlayer;
