import { ProjectType } from '@/models/project-type';
import { ProjectState } from '@/models/project-state';

export interface ProjectModel {
  id: string; // 主键
  title: string; // 标题 一句话描述项目，遵从一定的格式
  details: string; // 详情
  plannedStartTime: string; // 计划开始时间
  plannedCompletionTime: string; // 计划完成时间
  actualStartTime: string; // 实际开始时间
  actualCompletionTime: string; // 实际完成时间
  fixedStartTime: string; // 固定开始时间
  fixedFinishTime: string; // 固定结束时间
  createdTime: string; // 项目创建时间
  targetID: string; //关联目标的主键
  type: ProjectType; // 类型
  state: ProjectState; // 状态
}
