import { TimeLayout } from '@/components/timelayout';
import { TimeMenuItems, ToDoTimeLayOutData } from '@/models/timelayout';

export default function IndexPage() {
  return (
    <TimeLayout activeItem={ToDoTimeLayOutData} menuItems={TimeMenuItems} />
  );
}
