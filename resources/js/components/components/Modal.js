import React from "react"
import { useTransition, animated } from "react-spring"
import { connect } from "react-redux"
import { toggleShowModal } from "../actions"

const Modal = ({ showModal, width, toggleShowModal, children, ...rest }) => {
    const overlayTransition = useTransition(showModal, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    const cardTransition = useTransition(showModal, null, {
        from: { opacity: 0, top: `-${100}%` },
        enter: { opacity: 1, top: `${50}%` },
        leave: { opacity: 0, top: `-${100}%` }
    })

    if (showModal) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "scroll"
    }

    return (
        <React.Fragment>
            {overlayTransition.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div
                            key={key}
                            className="overlay"
                            style={{ ...props }}
                            onClick={() => {
                                toggleShowModal()
                            }}
                            {...rest}
                        />
                    )
            )}
            {cardTransition.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div
                            key={key}
                            style={{
                                ...props
                            }}
                            className="modal_card">
                            <i
                                aria-hidden="true"
                                onClick={() => {
                                    toggleShowModal()
                                }}
                                className="close">
                                &times;
                            </i>
                            {children}
                        </animated.div>
                    )
            )}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    showModal: state.ui.showModal
})

const mapDispatchToProps = dispatch => ({
    toggleShowModal: () => dispatch(toggleShowModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)
