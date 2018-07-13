const Member = () => import('../components/member/member')
const MemberManagement = () => import('../page/member/member-management')
const UserBasicInformation = () => import('../page/member/user-basic-information')
const UserLocalInformation = () => import('../page/member/user-local-information')
const UserBuyDetails = () => import('../page/member/user-buy-details')
const UserLoginRecord = () => import('../page/member/user-login-record')

export default [{
  path: '/member',
  component: Member,
  redirect: '/member/member-management',
  children: [{
    path: 'member-management',
    name: '会员管理',
    component: MemberManagement
  }, {
    path: 'user-basic-information',
    name: '用户基本信息',
    component: UserBasicInformation
  }, {
    path: 'user-local-information',
    name: '用户本地账户信息',
    component: UserLocalInformation
  }, {
    path: 'user-buy-details',
    name: '用户预订明细',
    component: UserBuyDetails
  }, {
    path: 'user-login-record',
    name: '用户登录设备记录',
    component: UserLoginRecord
  }]
}]
