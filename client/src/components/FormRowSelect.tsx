export default function FormRowSelect({
  name,
  labelText,
  list,
  defaultValue = "",
  onChange,
}: any) {
  return (
    <>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <select
          name={name}
          id={name}
          className="form-select"
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {list.map((itemValue: any) => {
            return (
              <option key={itemValue} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
