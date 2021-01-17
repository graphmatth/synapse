import React from 'react';
import SectionFooter from '../Slices/SectionFooter';

const FooterList = ({ data }) => {
	const slice = data.map((sliceData) => {
		switch (sliceData.slice_type) {
			case 'section':
				return <SectionFooter key={sliceData.id} slice={sliceData} />;
			default:
				return null;
		}
	});
	return <>{slice}</>;
};

export default FooterList;
