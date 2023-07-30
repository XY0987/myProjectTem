// 要显示数据的名字和对应的键值
export interface showInfoType {
  showInfo: string;
  showIndex: string;
}

//(操作框)是否是危险,显示内容，回调函数
export interface operationType {
  isDanger: boolean;
  showInfo: string;
  callFn: (data: any) => void;
}

// 封装的列表prop传参类型(要显示的数据,数据，操作回调函数,是否在加载中)
export interface MyListProp {
  data: any;
  dataConfigObj: showInfoType[];
  operationConfig: operationType[];
  isLoading: boolean;
}

// 分页prop传参类型
export interface myPagingProp {
  pageNo: number; //当前页数
  pageSize: number; //每页条数
  total?: number; //总条数
  onChangeFn: (page: number, pageSize: number) => void; //改变的回调函数
}
