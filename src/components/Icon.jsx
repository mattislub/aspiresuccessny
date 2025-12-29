const Icon = ({ as: IconComponent, size = 'md', tone = 'default', ...props }) => {
  const sizeToken =
    {
      sm: 'var(--icon-size-sm)',
      md: 'var(--icon-size-md)',
      lg: 'var(--icon-size-lg)',
    }[size] || 'var(--icon-size-md)';

  const toneToken =
    {
      default: 'var(--text-secondary)',
      primary: 'var(--accent-strong)',
      muted: 'var(--text-tertiary)',
      success: 'var(--status-success)',
      warning: 'var(--status-warning)',
      danger: 'var(--status-error)',
    }[tone] || 'var(--text-secondary)';

  return <IconComponent style={{ width: sizeToken, height: sizeToken, color: toneToken }} aria-hidden="true" {...props} />;
};

export default Icon;
