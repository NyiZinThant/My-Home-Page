import { format, getDate, intlFormat } from 'date-fns';
import { useState } from 'react';

export default function Clock() {
  const [current, setCurrent] = useState(new Date());
  // setInterval(() => setCurrent(new Date()), 1000);
  const currentTime = intlFormat(current, {
    hour: '2-digit',
    minute: '2-digit',
  });
  const currentDate = format(current, 'yyyy, MMM dd');
  return (
    <div className="w-1/4 md:flex hidden flex-col text-white text-3xl font-thin ">
      <p className="">{currentTime}</p>
      <p className="">{currentDate}</p>
    </div>
  );
}
