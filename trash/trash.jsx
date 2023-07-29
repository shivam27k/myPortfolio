// Home.js
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './Home.css'

const Home = () => {
	const [currentScreen, setCurrentScreen] = useState('middle')
	const [isSliding, setIsSliding] = useState(false)

	const handleCardClick = (nextScreen) => {
		setIsSliding(true)

		setTimeout(() => {
			setCurrentScreen(nextScreen)
			setIsSliding(false)
		}, 500)
	}

	return (
		<div className="home-container">
			<div
				className={`cards-container ${isSliding ? 'scaling-down' : ''}`}
			>
				<CSSTransition
					in={currentScreen === 'middle'}
					timeout={500}
					classNames="slide-up"
					unmountOnExit
				>
					<div
						className="card middle-center"
						onClick={() => handleCardClick('top')}
					>
						MiddleCenter
					</div>
				</CSSTransition>
				<CSSTransition
					in={currentScreen === 'top'}
					timeout={500}
					classNames="slide-up"
					unmountOnExit
				>
					<div
						className="card top-center"
						onClick={() => handleCardClick('bottom')}
					>
						TopCenter
					</div>
				</CSSTransition>
				<CSSTransition
					in={currentScreen === 'bottom'}
					timeout={500}
					classNames="slide-down"
					unmountOnExit
				>
					<div
						className="card middle-center"
						onClick={() => handleCardClick('middle')}
					>
						BottomCenter
					</div>
				</CSSTransition>
			</div>
		</div>
	)
}

export default Home
