const System = () => import('../components/system/system')
const EquipmentShop = () => import('../page/system/equipment-shop')
const LotteryRecord = () => import('../page/system/lottery-record')
const OrganizationStructure = () => import('../page/system/organization-structure')
const BusinessCategory = () => import('../page/system/business-category')
const PersonnelAccess = () => import('../page/system/personnel-access')
const Positions = () => import('../page/system/positions')
const ModifyStore = () => import('../page/system/modify-store')
const addStore = () => import('../page/system/add-store')

export default [{
  path: '/system',
  component: System,
  redirect: '/system/equipment-shop',
  children: [{
    path: 'equipment-shop',
    name: '设备店铺',
    component: EquipmentShop
  }, {
    path: 'lottery-record',
    name: '开奖记录',
    component: LotteryRecord
  }, {
    path: 'organization-structure',
    name: '组织结构',
    component: OrganizationStructure
  }, {
    path: 'business-category',
    name: '业务类别',
    component: BusinessCategory
  }, {
    path: 'personnel-access',
    name: '人员权限',
    component: PersonnelAccess
  }, {
    path: 'positions',
    name: '职务',
    component: Positions
  }, {
    path: 'modify-store',
    name: '查看店铺详细信息',
    component: ModifyStore
  }, {
    path: 'add-store',
    name: '新增店铺',
    component: addStore
  }]
}]
