import { TimeLayout } from '@/components/timelayout';
import { TimeMenuItems, ToDoTimeLayOutData } from '@/data/timelayout';
import styles from '@/pages/index.less';

export default function IndexPage() {
  return (
    <div className={styles}>
      {' '}
      <TimeLayout
        activeItem={ToDoTimeLayOutData}
        menuItems={TimeMenuItems}
      />{' '}
    </div>
  );
}
