interface PropsButton {
  text: string;
  variant: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

import '../styles/Button.scss'

export default function Button({text, variant, onClick}: PropsButton ) {
    console.log('teste')
  return (
    <button onClick={onClick} className={variant === 'primary' ? 'primary' : 'secondary'}>{text}</button>
  );
};