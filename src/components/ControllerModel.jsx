import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../public/Xbox_controller_free';

const ControllerModel = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (

		<Canvas
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			camera={{ position: [60, 30, 30], fov: 15 }}
			style={{
				backgroundColor: isHovered ? 'rgba(163, 230, 53)' : 'rgba(163, 230, 53, 0.4)',
				boxShadow: isHovered ? '10px 20px 30px 0 rgba(163, 230, 53)' : 'none',
				width: '50vw',
				borderRadius: '10px',
				transition: 'all 400ms',
				cursor: isHovered ? 'pointer' : '',
			}}
		>
			<ambientLight intensity={1} />
			{/* Directional light with a direction specified */}
			<directionalLight intensity={1} position={[1, 1, 1]} />
			<Suspense fallback={null}>
				<Model position={[0.5, 0.3, 1]} />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
}

export default ControllerModel
