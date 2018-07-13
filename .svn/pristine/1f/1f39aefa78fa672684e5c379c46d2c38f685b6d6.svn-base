const Operation = () => import('../components/operation/operation')
const GameManagement = () => import('../page/operation/game-management')
const ActivityManagement = () => import('../page/operation/activity-management')
const TicketManagement = () => import('../page/operation/ticket-management')
const AbnormalOrders = () => import('../page/operation/abnormal-orders')
const GameDetails = () => import('../page/operation/game-details')
const GameCompensationDetails = () => import('../page/operation/game-compensation-details')
const AddTicketManagement = () => import('../page/operation/add-ticket-management')
const ReleaseTicket = () => import('../page/operation/release-ticket')
const ModifyTicket = () => import('../page/operation/modify-ticket')
const AddActivity = () => import('../page/operation/add-activity')
const ModifyActivity = () => import('../page/operation/modify-activity')
const LookActivity = () => import('../page/operation/look-activity')

export default [{
  path: '/operation',
  component: Operation,
  redirect: '/operation/game-management',
  children: [{
    path: 'game-management',
    name: '赛事管理',
    component: GameManagement
  }, {
    path: 'activity-management',
    name: '活动管理',
    component: ActivityManagement
  }, {
    path: 'ticket-management',
    name: '票券管理',
    component: TicketManagement
  }, {
    path: 'abnormal-orders',
    name: '异常订单查询',
    component: AbnormalOrders
  }, {
    path: 'game-details',
    name: '赛事详情',
    component: GameDetails
  }, {
    path: 'game-compensation-details',
    name: '赛事赔率详情',
    component: GameCompensationDetails
  }, {
    path: 'add-ticket-management',
    name: '新建票券管理',
    component: AddTicketManagement
  }, {
    path: 'release-ticket',
    name: '已发布票券',
    component: ReleaseTicket
  }, {
    path: 'modify-ticket',
    name: '修改票券',
    component: ModifyTicket
  }, {
    path: 'add-activity',
    name: '新增活动',
    component: AddActivity
  }, {
    path: 'modify-activity',
    name: '修改活动',
    component: ModifyActivity
  }, {
    path: 'look-activity',
    name: '查看活动',
    component: LookActivity
  }]
}]
