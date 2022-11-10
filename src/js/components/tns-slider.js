const tnsSingleMobile = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleMobile',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		mode                : 'gallery',
		mouseDrag           : true,
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
			]
		}); 
};

const tnsSingleDesktop = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleDesktop',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		mode                : 'gallery',
		mouseDrag           : true,
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
			]
		}); 
};

export{
	tnsSingleMobile,
	tnsSingleDesktop
}
