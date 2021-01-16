import React from 'react';
import Partners from '../Slices/Partners';
import InfosProduct from '../Slices/InfosProduct';
import Testimonials from '../Slices/Testimonials';
import ContactForm from '../Slices/ContactForm';

const SliceZone = ({ sliceZone }) => {
	const sliceComponents = {
		partners: Partners,
		infos_product: InfosProduct,
		testimonials: Testimonials,
		contact_form: ContactForm,
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
