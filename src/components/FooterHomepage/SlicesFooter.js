import React from 'react';
import SocialFooter from '../Slices/SocialFooter';
import LegalMentions from '../Slices/LegalMentions';

const SlicesFooter = ({ data }) => {
	const slice = data.map((sliceData) => {
		switch (sliceData.slice_type) {
			case 'social':
				return <SocialFooter key={sliceData.id} slice={sliceData} />;
			case 'legal_mention':
				return <LegalMentions key={sliceData.id} slice={sliceData} />;
			default:
				return null;
		}
	});
	return <div>{slice}</div>;
};

export default SlicesFooter;
