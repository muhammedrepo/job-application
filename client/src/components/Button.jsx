import className from 'classnames';

function Button({ children, primary, hipster, outline, danger, ...rest }) {
  const classes = className(
    rest.className,
    'cursor-pointer border-transparent rounded-sm tracking-wider py-1.5 px-3 shadow-shadow-2 transition-type capitalize inline-block hover:shadow-shadow-3',
    {
      'bg-primary-500 text-white hover:bg-primary-700': primary,
      'bg-primary-200 text-primary-500 hover:bg-primary-700 hover:text-primary-200':
        hipster,
      'bg-danger text-red hover:bg-red hover:text-white': danger,
      'bg-transparent border-transparent text-primary-500 tracking-wider capitalize cursor-pointer':
        outline,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
