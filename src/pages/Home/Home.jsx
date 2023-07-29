/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Home.css'

const Home = () => {
	const [posX, setPosX] = useState(0)
	const [posY, setPosY] = useState(0)
	const [activeAnimation, setActiveAnimation] = useState(null)
	const [isZoomed, setIsZoomed] = useState(false)
	const [selectedPanel, setSelectedPanel] = useState(null)

	const handleMove = (x, y) => {
		setPosX((prevX) => prevX + x)
		setPosY((prevY) => prevY + y)
	}

	const toggleAnimation = (index) => {
		setActiveAnimation(activeAnimation === index ? null : index)
	}

	const handleZoomOut = (e) => {
		e.stopPropagation()
		setPosX(0)
		setPosY(0)
		setIsZoomed(true)
		setSelectedPanel(null) // Reset selected panel when zooming out
	}

	const handleSelectPanel = (x, y) => {
		if (isZoomed) {
			setPosX(x)
			setPosY(y)
			setIsZoomed(false)
		} else {
			setSelectedPanel({ x, y })
		}
	}

	return (
		<div className={`site-wrap${isZoomed ? ' show-all' : ''}`}>
			<div
				className={`panel-wrap${isZoomed ? ' animate--none' : ''}`}
				style={{
					transform: `translateX(${posX * 100}%) translateY(${
						posY * 100
					}%)`,
				}}
			>
				<div
					onClick={() => handleSelectPanel(0, 0)}
					className="panel"
					data-x-pos="0"
					data-y-pos="0"
				>
					<span
						className="panel__nav panel__nav--up js-up"
						onClick={() => handleMove(0, 1)}
					>
						up
					</span>
					<span
						className="panel__nav panel__nav--right-top js-up js-right"
						onClick={() => handleMove(-1, 1)}
					>
						up/right
					</span>
					<span
						className="panel__nav panel__nav--left-top js-up js-left"
						onClick={() => handleMove(1, 1)}
					>
						up/left
					</span>
					<span
						className="panel__nav panel__nav--left js-left"
						onClick={() => handleMove(1, 0)}
					>
						left
					</span>
					<span
						className="panel__nav panel__nav--right js-right"
						onClick={() => handleMove(-1, 0)}
					>
						right
					</span>
					<span
						className="panel__nav panel__nav--right-down js-down js-right"
						onClick={() => handleMove(-1, -1)}
					>
						down/right
					</span>
					<span
						className="panel__nav panel__nav--left-down js-down js-left"
						onClick={() => handleMove(1, -1)}
					>
						down/left
					</span>
					<span
						className="panel__nav panel__nav--down js-down"
						onClick={() => handleMove(0, -1)}
					>
						down
					</span>
					<span
						className="panel__zoom js-zoom"
						onClick={handleZoomOut}
					>
						View All
					</span>
					<h1>Main</h1>
					<div className="panel__animation-list">
						<span
							className={`js-animation${
								activeAnimation === null ? ' active' : ''
							}`}
							data-animation="animate--none"
							onClick={() => toggleAnimation(null)}
						>
							None
						</span>
						<span
							className={`js-animation${
								activeAnimation === 0 ? ' active' : ''
							}`}
							data-animation="animate--shrink"
							onClick={() => toggleAnimation(0)}
						>
							Shrink
						</span>
						<span
							className={`js-animation${
								activeAnimation === 1 ? ' active' : ''
							}`}
							data-animation="animate--tilt"
							onClick={() => toggleAnimation(1)}
						>
							Tilt
						</span>
						<span
							className={`js-animation${
								activeAnimation === 2 ? ' active' : ''
							}`}
							data-animation="animate--tilt2"
							onClick={() => toggleAnimation(2)}
						>
							Tilt-2
						</span>
					</div>
				</div>

				<div
					onClick={() => handleSelectPanel(0, 1)}
					className="panel"
					data-x-pos="0"
					data-y-pos="1"
				>
					<span
						className="panel__nav panel__nav--left js-left"
						onClick={() => handleMove(1, 0)}
					>
						left
					</span>
					<span
						className="panel__nav panel__nav--right js-right"
						onClick={() => handleMove(-1, 0)}
					>
						right
					</span>
					<span
						className="panel__nav panel__nav--right-down js-down js-right"
						onClick={() => handleMove(-1, -1)}
					>
						down/right
					</span>
					<span
						className="panel__nav panel__nav--left-down js-down js-left"
						onClick={() => handleMove(1, -1)}
					>
						down/left
					</span>
					<span
						className="panel__nav panel__nav--down js-down"
						onClick={() => handleMove(0, -1)}
					>
						down
					</span>
					<h1>Up</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(1, 1)}
					className="panel"
					data-x-pos="-1"
					data-y-pos="1"
				>
					<span
						className="panel__nav panel__nav--right-down js-down js-right"
						onClick={() => handleMove(-1, -1)}
					>
						down/right
					</span>
					<span
						className="panel__nav panel__nav--right js-right"
						onClick={() => handleMove(-1, 0)}
					>
						right
					</span>
					<span
						className="panel__nav panel__nav--down js-down"
						onClick={() => handleMove(0, -1)}
					>
						down
					</span>
					<h1>Up Left</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(-1, 1)}
					className="panel"
					data-x-pos="1"
					data-y-pos="1"
				>
					<span
						className="panel__nav panel__nav--left-down js-down js-left"
						onClick={() => handleMove(1, -1)}
					>
						down/left
					</span>
					<span
						className="panel__nav panel__nav--left js-left"
						onClick={() => handleMove(1, 0)}
					>
						left
					</span>
					<span
						className="panel__nav panel__nav--down js-down"
						onClick={() => handleMove(0, -1)}
					>
						down
					</span>
					<h1>Up Right</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(1, 0)}
					className="panel"
					data-x-pos="-1"
					data-y-pos="0"
				>
					<span
						className="panel__nav panel__nav--up js-up"
						onClick={() => handleMove(0, 1)}
					>
						up
					</span>
					<span
						className="panel__nav panel__nav--right-top js-up js-right"
						onClick={() => handleMove(-1, 1)}
					>
						up/right
					</span>
					<span
						className="panel__nav panel__nav--right js-right"
						onClick={() => handleMove(-1, 0)}
					>
						right
					</span>
					<span
						className="panel__nav panel__nav--right-down js-down js-right"
						onClick={() => handleMove(-1, -1)}
					>
						down/right
					</span>
					<span
						className="panel__nav panel__nav--down js-down"
						onClick={() => handleMove(0, -1)}
					>
						down
					</span>
					<h1>Left</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(-1, 0)}
					className="panel"
					data-x-pos="1"
					data-y-pos="0"
				>
					<span
						className="panel__nav panel__nav--up js-up"
						onClick={() => handleMove(0, 1)}
					>
						up
					</span>
					<span
						className="panel__nav panel__nav--left-top js-up js-left"
						onClick={() => handleMove(1, 1)}
					>
						up/left
					</span>
					<span
						className="panel__nav panel__nav--left js-left"
						onClick={() => handleMove(1, 0)}
					>
						left
					</span>
					<span
						className="panel__nav panel__nav--left-down js-down js-left"
						onClick={() => handleMove(1, -1)}
					>
						down/left
					</span>
					<span
						className="panel__nav panel__nav--down js-down"
						onClick={() => handleMove(0, -1)}
					>
						down
					</span>
					<h1>Right</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(0, -1)}
					className="panel"
					data-x-pos="0"
					data-y-pos="-1"
				>
					<span
						className="panel__nav panel__nav--up js-up"
						onClick={() => handleMove(0, 1)}
					>
						up
					</span>
					<span
						className="panel__nav panel__nav--left-top js-up js-left"
						onClick={() => handleMove(1, 1)}
					>
						up/left
					</span>
					<span
						className="panel__nav panel__nav--right-top js-up js-right"
						onClick={() => handleMove(-1, 1)}
					>
						up/right
					</span>
					<span
						className="panel__nav panel__nav--left js-left"
						onClick={() => handleMove(1, 0)}
					>
						left
					</span>
					<span
						className="panel__nav panel__nav--right js-right"
						onClick={() => handleMove(-1, 0)}
					>
						right
					</span>
					<h1>Down</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(-1, -1)}
					className="panel"
					data-x-pos="1"
					data-y-pos="-1"
				>
					<span
						className="panel__nav panel__nav--up js-up"
						onClick={() => handleMove(0, 1)}
					>
						up
					</span>
					<span
						className="panel__nav panel__nav--left-top js-up js-left"
						onClick={() => handleMove(1, 1)}
					>
						up/left
					</span>
					<span
						className="panel__nav panel__nav--left js-left"
						onClick={() => handleMove(1, 0)}
					>
						left
					</span>

					<h1>Down Rt</h1>
				</div>

				<div
					onClick={() => handleSelectPanel(1, -1)}
					className="panel"
					data-x-pos="-1"
					data-y-pos="-1"
				>
					<span
						className="panel__nav panel__nav--up js-up"
						onClick={() => handleMove(0, 1)}
					>
						up
					</span>
					<span
						className="panel__nav panel__nav--right-top js-up js-right"
						onClick={() => handleMove(-1, 1)}
					>
						up/right
					</span>
					<span
						className="panel__nav panel__nav--right js-right"
						onClick={() => handleMove(-1, 0)}
					>
						right
					</span>
					<h1>Down Left</h1>
				</div>
			</div>
		</div>
	)
}

export default Home
