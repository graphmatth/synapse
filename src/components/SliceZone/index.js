import React from 'react';
import Partners from '../Slices/Partners';

const SliceZone = ({ sliceZone }) => {
	const sliceComponents = {
		partners: Partners,
	};
	const sliceZoneContent = sliceZone.map((slice, index) => {
		const SliceComponent = sliceComponents[slice.slice_type];
		if (SliceComponent) {
			return <SliceComponent key={`slice-${index}`} slice={slice} />;
		}
		return null;
	});
	return <main>{sliceZoneContent}</main>;
};

export default SliceZone;
