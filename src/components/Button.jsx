const Button = ({
  children,
  variant = 'primary',
  startIcon: StartIcon,
  endIcon: EndIcon,
  size = 'md',
  as = 'button',
  ...props
}) => {
  const Tag = as;
  const classes = ['button'];
  if (variant === 'secondary') classes.push('button--secondary');
  if (variant === 'ghost') classes.push('button--ghost');
  if (size === 'small') classes.push('button--small');

  return (
    <Tag className={classes.join(' ')} {...props}>
      {StartIcon ? <StartIcon aria-hidden="true" /> : null}
      {children}
      {EndIcon ? <EndIcon aria-hidden="true" /> : null}
    </Tag>
  );
};

export default Button;
