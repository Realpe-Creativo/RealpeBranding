// src/components/YoutubeReel.jsx
export default function YoutubeReel({ videoId, autoplay = false }) {
    const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: "0",
        loop: "1",
        playlist: videoId,
        controls: "0",
    });

    return (
        <div className="w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-xl">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
                title="YouTube Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
}
