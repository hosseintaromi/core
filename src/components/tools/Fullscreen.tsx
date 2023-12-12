import React, { useState } from 'react'
import Icon from '../icons/Icon'
import { useFullscreen } from '../../hooks/useFullscreen';

const Fullscreen = () => {
    const video_wrapper_id = document.getElementById("video_wrapper_id");
    const video_player = document.getElementById("video_player");
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const { toggleFullscreen } = useFullscreen((e) => {
        setIsFullscreen(e);
        (window.screen.orientation as any)?.lock("landscape-primary");
    }, video_wrapper_id, video_player);

    return (
        <div style={{ color: "#ffffff", cursor: "pointer" }}>
            <Icon onClick={() => toggleFullscreen()} type={!isFullscreen ?
                "fullScreen"
                :
                "unFullScreen"
            }
            />
        </div>
    )
}

export default Fullscreen