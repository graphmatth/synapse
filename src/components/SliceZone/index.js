import React from 'react';
import Partners from '../Slices/Partners';
import InfosProduct from '../Slices/InfosProduct';
import Testimonials from '../Slices/Testimonials';
import ContactForm from '../Slices/ContactForm';
import SectionFooter from '../Slices/SectionFooter';
import SocialFooter from '../Slices/SocialFooter';
import LegalMentions from '../Slices/LegalMentions';

const SliceZone = ({ sliceZone }) => {
	const sliceComponents = {
		partners: Partners,
		infos_product: InfosProduct,
		testimonials: Testimonials,
		contact_form: ContactForm,
		section: SectionFooter,
		social: SocialFooter,
		legal_mention: LegalMentions,
	};
	const sliceZoneContent = sliceZone.map((slice, index) => {
		const SliceComponent = sliceComponents[slice.slice_type];
		if (SliceComponent) {
			return <SliceComponent key={`slice-${index}`} slice={slice} />;
		}
		return null;
	});
	return <div>{sliceZoneContent}</div>;
};

export default SliceZone;
