import { Get } from '@/data/api';
import { ListTags } from '@/bo/tag';

export function QueryTags(
  pageNo: number,
  pageSize: number,
  success: (data: ListTags) => void,
) {
  return Get('/tags?pageNo=' + pageNo + '&pageSize=' + pageSize, success);
}
