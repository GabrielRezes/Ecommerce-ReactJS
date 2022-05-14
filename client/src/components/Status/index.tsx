import './status.scss';

export default function Status ({text, type}:any) {
  return(
    <span className='container-status'>
      <p className={type === 'error' ? 'message-error' : 'message-success '}>{text}</p>
    </span>
  );
};