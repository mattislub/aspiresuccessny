import Button from './Button';

const Modal = ({ title, description, children, onClose, actions }) => {
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__dialog">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
          <div>
            {title ? (
              <h2 id="modal-title" className="title-md" style={{ margin: 0 }}>
                {title}
              </h2>
            ) : null}
            {description ? <p className="lead">{description}</p> : null}
          </div>
          <Button variant="ghost" aria-label="Close dialog" onClick={onClose}>
            ×
          </Button>
        </div>
        {children}
        <div className="modal__footer">
          {actions}
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
