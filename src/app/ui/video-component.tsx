// "use client"
import BackgroundVideo from 'next-video/background-video';

export default function VideoComponent({ src, w, h, left, top }) {

    return (
        <BackgroundVideo src={src} width={w} height={h} style={{ position: "absolute", top: top, left: left, objectFit: "cover" }} />
    );
}
