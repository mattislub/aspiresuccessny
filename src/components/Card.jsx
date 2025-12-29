const Card = ({ title, eyebrow, icon: IconComponent, actions, children }) => {
  return (
    <div className="card">
      {(eyebrow || title || IconComponent || actions) && (
        <div className="card__header">
          {IconComponent ? <IconComponent aria-hidden="true" /> : null}
          <div style={{ flex: 1 }}>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h3 className="title-md" style={{ margin: 0 }}>{title}</h3> : null}
          </div>
          {actions}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
