import React from "react";
//import loader from "../../assets/img/loading.gif";
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Loading() {
  const [completed, setCompleted] = React.useState(0);

  
  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (    
    <div>
       <LinearProgress color="primary" variant="indeterminate" value={completed} />
       {/* <img src={loader} /> */}
    </div>
  );
}
