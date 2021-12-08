import { TimeLayout } from '@/components/timelayout';
import { TimeMenuItems, ToDoTimeLayOutData } from '@/data/timelayout';

export default function IndexPage() {
  return (
    <TimeLayout activeItem={ToDoTimeLayOutData} menuItems={TimeMenuItems} />
  );
}
