const Toast = ({ tone = 'info', title, message, onDismiss }) => {
  const toneClass =
    {
      success: 'badge--success',
      warning: 'badge--warning',
      error: 'badge--error',
      info: 'badge--info',
    }[tone] || 'badge--info';

  return (
    <div className="toast" role="status">
      <div className="toast__body">
        <span className={`badge ${toneClass}`} aria-hidden="true">
          {tone.toUpperCase()}
        </span>
        <span className="toast__title">{title}</span>
        <span className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
          {message}
        </span>
      </div>
      <button className="button button--ghost" onClick={onDismiss} aria-label="Dismiss notification" type="button">
        ×
      </button>
    </div>
  );
};

export default Toast;
