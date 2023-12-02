import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';

export default function Customize() {
  return (
    <div className="w-1/3 hidden md:block">
      <div className="flex items-center gap-2">
        <Button icon={faPencil} />
        <p className="text-white">Customize here!</p>
      </div>
    </div>
  );
}
