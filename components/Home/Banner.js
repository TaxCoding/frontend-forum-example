import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const imgBase =
	'data:image/png;base64,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';

const Banner = () => (
	<header>
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src={imgBase} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgBase} alt="Third slide" />
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgBase} alt="Third slide" />
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</header>
);

export default Banner;
