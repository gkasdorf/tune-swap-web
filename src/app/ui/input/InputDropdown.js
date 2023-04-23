const InputDropdown = ({label, options, ...props}) => {
    return (
        <>
            <span className={"text-gray-700"}>{label}</span>
            <select className={"py-3 px-4 w-full bg-gray-100 border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none"} {...props}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    );
}

export default InputDropdown;