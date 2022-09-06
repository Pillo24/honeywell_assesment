export default function FormInput({ label, onChange, ...inputProps }) {
  const handleChange = (e) => {};
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}
