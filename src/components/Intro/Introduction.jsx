/* eslint-disable react/no-unescaped-entities */
import './Introduction.css'
import PropTypes from 'prop-types'
import { useSpring, animated } from '@react-spring/web'

const Introduction = ({ onViewAll, birdFly }) => {
	const contentAnimation = useSpring({
		to: { opacity: 1, transform: 'translateY(0%)' },
		from: { opacity: 0, transform: 'translateY(30%)' },
		config: { duration: 800 },
		delay: 200,
	})

	return (
		<div className="glowingBox">
			<div role="button" onClick={onViewAll}>
				<span className="glow"></span>
				<div>
					<animated.div
						style={contentAnimation}
						className="mainContainer"
					>
						<h1 className="heading1">Welcome To</h1>
						<h1 className="heading1 name">Shivam's Portfolio</h1>
						<animated.div className="intro-content">
							<div className="section-1">
								<p className="content">
									Building bridges between front-end elegance
									and back-end robustness, one line of code at
									a time.
								</p>
								<p className="content">-ChatGPT</p>
							</div>
							<div
								id={birdFly ? 'pictureframe2' : 'pictureframe'}
							>
								<div id="bird">
									<div id="body2"></div>
									<div id="body1"></div>
									<div id="wing-l"></div>
									<div id="wing-r"></div>
								</div>
								<div id="shadow"></div>
							</div>
							<div className="section-2">
								<p className="content site-desc">
									Click to make the bird fly away
								</p>
							</div>
						</animated.div>
					</animated.div>
				</div>
			</div>
		</div>
	)
}

Introduction.propTypes = {
	onViewAll: PropTypes.func.isRequired,
	birdFly: PropTypes.bool.isRequired,
}

export default Introduction
