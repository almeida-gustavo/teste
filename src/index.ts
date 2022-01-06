import app from './api/app';
import { serverPort } from './constants/envVariables';

app.listen(serverPort, () => {
  console.log('Server runing on port: ', serverPort);
});
