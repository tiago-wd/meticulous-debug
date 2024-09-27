import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { MagicBellProvider } from '@magicbell/magicbell-react';
import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.magicbell.com', true);

      // Set headers
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('X-Custom-Header', 'TestValue');

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            console.log('Response data:', data);
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        } else {
          console.error('Request failed with status:', xhr.status);
        }
      };

      xhr.onerror = function () {
        console.error('Network error occurred');
      };

      xhr.send();
    };

    fetchData();
  }, []);

  return (
    <div>
      <MagicBellProvider
        apiKey={'test'}
        userExternalId={'test'}
        userKey={'test'}
        locale="en"
      >
        <NxWelcome title="headers-test" />

      </MagicBellProvider >
    </div>
  );
}

export default App;
