const Checkbox = ({ action, selectedSetupLabels, handleCheckboxChange }: any) => (
  <div key={action} className="flex items-center">
    <input
      type="checkbox"
      id={`setup-action-${action}`}
      name={action}
      checked={selectedSetupLabels.includes(action)}
      onChange={() => handleCheckboxChange(action)}
      className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <label htmlFor={`setup-action-${action}`} className="text-gray-700">
      {action}
    </label>
  </div>
);

export default Checkbox;
