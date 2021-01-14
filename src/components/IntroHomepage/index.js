import React from 'react';
import { Background, Wrapper, TextSection, Title, Description, Cta, VideoWrapper, Video, Arrow } from './styles';

const IntroHomepage = ({ dataHomepage }) => {
	if (!dataHomepage) return null;
	return (
		<Background>
			<Wrapper>
				<TextSection>
					<Title>{dataHomepage.title.text}</Title>
					<Description>{dataHomepage.description.text}</Description>

					<Cta href="https://synapse-medicine.com/en/">
						{dataHomepage.cta[0].label.text}
						<Arrow alt="arrow" src="../../Images/arrow-cta.svg" />
					</Cta>
				</TextSection>
				<VideoWrapper>
					<Video
						autoPlay
						loop
						muted
						playsinline
						className="el"
						preload="auto"
						src="https://synapse-medicine.com/static/Waves_Loop-web-higherQ-c063faadd366532e03b7be8d375ce27c.mp4"
					/>
				</VideoWrapper>
			</Wrapper>
		</Background>
	);
};

export default IntroHomepage;
