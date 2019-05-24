import React from "react"
import './Overlay.scss'
import {useTransition, animated} from 'react-spring'

const Overlay = ({show,...rest}) => {
    const transitions = useTransition(show, null, {
        from: { position: "absolute", opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })
    return transitions.map(
        ({ item, key, props }) =>
            item && (
                <animated.div
                    key={key}
                    style={{
                        ...props,
                        position: "static",
                        zIndex: "2"
                    }}>
                    <div className="overlay" {...rest} />
                </animated.div>
            )
    )
}

export default Overlay
