import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  // scrolls to top when page changes, as useEffect runs cleanup function "unlisten", which scrolls to the top
  useEffect(() => {
    // history.listen listens to Route/URL changes
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (<></>);
}
// to include router parameters and have access to history object
export default withRouter(ScrollToTop);