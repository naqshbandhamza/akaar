"use client"
// export default function VideoComponent({ src, w, h, left, top }) {

//     const autoplaySrc = `${src}?autoplay=1&controls=0`;

//     return <iframe src={autoplaySrc} style={{ position: "absolute", top: top, left: left }} width={w} height={h} allowFullScreen={false} />
// }

import { useEffect, useRef } from 'react';

export default function VideoComponent({ src, w, h, left, top }) {
    const iframeRef: any = useRef(null);

    useEffect(() => {
        // Adjust the iframe to cover the container size
        iframeRef.current.style.position = 'absolute';
        iframeRef.current.style.top = 0;
        iframeRef.current.style.left = 0;
        iframeRef.current.style.width = '100%';
        iframeRef.current.style.height = '100%';
        iframeRef.current.style.objectFit = 'cover';
    }, []);

    const autoplaySrc = `${src}?autoplay=1&controls=0&muted=1&loop=1&playsinline=1`;

    return (
        <div style={{ position: 'absolute', width: w, height: h, overflow: 'hidden', left: left, top: top, objectFit: "cover" }}>
            <video
                ref={iframeRef}
                src={autoplaySrc}
            />
        </div>
    );
}
