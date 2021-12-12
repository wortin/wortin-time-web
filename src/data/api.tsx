import { message } from 'antd';

export const APIHost: string = 'http://192.168.199.177:8080';

export function Get(url: string, success: (data: any) => void) {
  fetch(APIHost + url, {
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((r) => {
      if (r.code != 50000) {
        message.error(r.message);
      } else {
        success(r.data);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
