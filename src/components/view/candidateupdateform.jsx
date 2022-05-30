/** @format */
import '../resource/stylesheet/reviewForm.css';
import React, { useState } from 'react';

export default function CandidateUpdate(props) {
	const [candidate, setCandidate] = useState(props.location.state);

	const handleChange = (name) => (event) => {
		setCandidate({
			...candidate,
			[name]: event.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setCandidate({ ...candidate });
	};

	return (
		<>
			<div className="">
				<form target="#">
					<div>
						<label htmlFor="Name">Name: </label>
						<input
							type="text"
							name="Name"
							value={candidate.name}
							onChange={handleChange('name')}
						/>
						<label htmlFor="Constituency">Constituency: </label>
						<input
							type="text"
							name="Constituency"
							value={candidate.Constituency}
							onChange={handleChange('Constituency')}
						/>
						<label htmlFor="Assets">Assets: </label>

						<input
							type="text"
							name="Assets"
							value={candidate.total_assets}
							onChange={handleChange('total_assets')}
						/>
						<label htmlFor="Party">Party: </label>

						<input
							type="text"
							name="Party"
							value={candidate.party}
							onChange={handleChange('party')}
						/>
						<label htmlFor="Education">Education: </label>

						<input
							type="text"
							name="Education"
							value={candidate.education}
							onChange={handleChange('education')}
						/>
						<label htmlFor="CriminalCases">CriminalCases: </label>

						<input
							type="text"
							name="CriminalCases"
							value={candidate.criminalCases}
							onChange={handleChange('criminalCases')}
						/>
					</div>
					<div>
						<button type="submit">update</button>
					</div>
				</form>
			</div>
		</>
	);
}
