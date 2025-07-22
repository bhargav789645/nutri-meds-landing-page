import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { Clock } from 'lucide-react';

const ISTClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert to IST
  const istTime = toZonedTime(currentTime, 'Asia/Kolkata');
  const formattedDate = format(istTime, 'EEEE, MMMM do, yyyy');
  const formattedTime = format(istTime, 'hh:mm:ss a');

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-medium border border-border">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent">
          <Clock className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="text-sm font-semibold text-primary">
            {formattedTime}
          </div>
          <div className="text-xs text-muted-foreground">
            {formattedDate} (IST)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISTClock;