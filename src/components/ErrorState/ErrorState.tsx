import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
type ErrorStateProps = {
  text: string;
  onRetry: () => void;
};
export const ErrorState: React.FC<ErrorStateProps> = ({ text, onRetry }) => {
  return (
    <Card className="flex items-center justify-center">
      <div>
        <CardHeader>
          <CardTitle className="text-center">Ocorreu um erro!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-500 text-sm">
            Possivelmente 421 too many request
          </p>
          <p className="text-gray-500  text-sm">Error message: {text}</p>
          <Button className="mt-8 text-sm bg-blue-400" onClick={onRetry}>
            Tentar novamente
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
