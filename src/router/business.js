const Business = () => import('../components/business/business')
const OrderManagement = () => import('../page/business/order-management')
const TakeTicket = () => import('../page/business/take-ticket')
const LotteryLiquidation = () => import('../page/business/lottery-liquidation')
const OrderDetail = () => import('../page/business/order-detail')
const OrderScanImage = () => import('../page/business/order-scan-image')

export default [{
  path: '/business',
  component: Business,
  redirect: '/business/order-management',
  children: [{
    path: 'order-management',
    name: '订单管理',
    component: OrderManagement
  }, {
    path: 'take-ticket',
    name: '取票单',
    component: TakeTicket
  }, {
    path: 'lottery-liquidation',
    name: '彩票清算',
    component: LotteryLiquidation
  }, {
    path: 'order-detail',
    name: '订单详情',
    component: OrderDetail
  }, {
    path: 'order-scan-image',
    name: '订单扫描件',
    component: OrderScanImage
  }]
}]
