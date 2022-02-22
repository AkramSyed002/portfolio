import { useState } from 'react';
export const useContactLogic = () => {

	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		projectName: '',
		message: ''

	})
	return [contactData, setContactData]
}

