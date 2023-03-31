import CustomButton from "./CustomButton";

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
	return (
		<div className="aipicker-container">
			<textarea
				className="aipicker-textarea"
				placeholder="Ask AI ..."
				rows={5}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
			/>
			<div className="flex flex-wrap gap-3">
				{generatingImg ? (
					<CustomButton
						type="outline"
						title="Asking AI ... "
						customStyles="text-xs px-4 py-2"
					/>
				) : (
					<>
						<CustomButton
							type="outline"
							title="AI Logo"
							handleClick={() => handleSubmit("logo")}
							customStyles="text-xs px-4 py-2"
						/>
						<CustomButton
							type="filled"
							title="AI FULL"
							handleClick={() => handleSubmit("full")}
							customStyles="text-xs px-4 py-2"
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default AiPicker;
