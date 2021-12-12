import React, { useEffect, useState } from 'react';
import styles from './taglist.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QueryTags } from '@/data/tag';
import { ListTag } from '@/bo/tag';
import { Button, Divider, List, Skeleton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const TagList: React.FC<{}> = ({}) => {
  const [pageNo, setPageNo] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(5);
  const [data, setData] = useState<Array<ListTag>>([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    QueryTags(pageNo, 5, (d) => {
      if (d != null && d.tags != null) {
        setData([...data, ...d.tags]);
        setTotal(d.total);
        setLoading(false);
        setPageNo(pageNo + 1);
      }
    });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div>
      <div style={{ padding: '16px 16px 5px 16px', fontWeight: 'bolder' }}>
        标签
        <Button
          type="primary"
          shape="circle"
          size="small"
          icon={<PlusOutlined />}
          style={{ float: 'right' }}
        />
      </div>
      <div
        id="scrollableDiv"
        style={{
          height: 250,
          overflow: 'auto',
          padding: '16px',
          // border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < total}
          loader={<Skeleton active loading={loading} />}
          endMessage={<Divider plain>已经没有更多标签了，点击增加标签</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                {item.emoji + ' ' + item.name}
                <div style={{ float: 'right' }}>{item.actionCount}</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};
