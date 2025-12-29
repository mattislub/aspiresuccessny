const InputField = ({ id, label, helper, error, as = 'input', type = 'text', startIcon: StartIcon, ...props }) => {
  const Field = as === 'textarea' ? 'textarea' : as === 'select' ? 'select' : 'input';
  const hasIcon = Boolean(StartIcon);
  return (
    <div className={`input${error ? ' input--error' : ''}`}>
      {label ? (
        <label htmlFor={id}>
          {label} {props.required ? <span aria-hidden="true">*</span> : null}
        </label>
      ) : null}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {hasIcon ? (
          <span style={{ position: 'absolute', left: '12px', color: 'var(--text-tertiary)' }}>
            <StartIcon aria-hidden="true" />
          </span>
        ) : null}
        <Field
          id={id}
          type={type}
          aria-invalid={Boolean(error)}
          style={hasIcon ? { paddingLeft: '38px' } : {}}
          {...props}
        />
      </div>
      {helper ? <p className="input__helper">{helper}</p> : null}
      {error ? (
        <p className="input__helper" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
