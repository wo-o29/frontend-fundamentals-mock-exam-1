import { Button } from 'tosslib';

interface ErrorFallbackProps {
  error: Error;
  onClick: () => void;
}

function ErrorFallback({ error, onClick }: ErrorFallbackProps) {
  return (
    <div>
      <p>{error.message}</p>
      <Button type="button" onClick={onClick}>
        다시 시도하기
      </Button>
    </div>
  );
}

export default ErrorFallback;
