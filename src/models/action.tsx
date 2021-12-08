export interface Action {
  id: string;
  title: string;
  details: string;
  planedExecuteDate: string;
  deadline: string;
  fixedStartTime: string;
  fixedFinishTime: string;
  actualStartTime: string;
  actualCompletionTime: string;
  createdTime: string;
  projectID: string;
  importance: number;
  urgency: number;
  facility: number;
  tags: Array<string>;
}
