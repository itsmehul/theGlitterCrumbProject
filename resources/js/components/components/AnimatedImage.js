import React from "react"
import { useSpring, animated } from "react-spring"

const AnimatedImage = ({ src, style, ...rest}) => {
    const [props, set] = useSpring(() => ({ opacity: 0, transform:`scale(${0.9},${0.9})` }))
    return (
        <animated.img
            src={src}
            alt=""
            {...rest}
            style={{props, ...style}}
            onLoad={() => {
                setTimeout(() => set({ opacity: 1, transform:`scale(${1},${1})` }), 300)
            }}
        />
    )
}

export default AnimatedImage
