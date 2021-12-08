import React from 'react';
import { ToDoContent } from '@/components/todo';
import { ProjectContent } from '@/components/project';
import { ReportContent } from '@/components/report';
import { TargetContent } from '@/components/target';
import { FeatureContent } from '@/components/feature';

export interface TimeLayOutData {
  key: string;
  title: string;
  content: React.FC;
}

export const ToDoTimeLayOutData: TimeLayOutData = {
  key: 'todo',
  title: '待办',
  content: ToDoContent,
};

export const ProjectTimeLayOutData: TimeLayOutData = {
  key: 'project',
  title: '项目',
  content: ProjectContent,
};

export const ReportTimeLayOutData: TimeLayOutData = {
  key: 'report',
  title: '报告',
  content: ReportContent,
};

export const TargetTimeLayOutData: TimeLayOutData = {
  key: 'target',
  title: '目标',
  content: TargetContent,
};

export const FeatureTimeLayOutData: TimeLayOutData = {
  key: 'feature',
  title: '将来',
  content: FeatureContent,
};

export const TimeMenuItems: Array<TimeLayOutData> = [
  ToDoTimeLayOutData,
  ProjectTimeLayOutData,
  ReportTimeLayOutData,
  TargetTimeLayOutData,
  FeatureTimeLayOutData,
];
