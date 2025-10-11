const caseTypeNames = {
  1: '刑事案件',
  2: '民事案件', 
  3: '行政案件',
  4: '经济案件',
  5: '其他案件'
};
const caseStatusNames = {
  1: '立案',
  2: '侦查中',
  3: '审查起诉',
  4: '审判中',
  5: '已结案',
  6: '归档',
}
const locationTypeNames = {
  1: '住宅',
  2: '商业场所',
  3: '公共场所',
  4: '野外',
  5: '交通工具',
  6: '其他',
}
const caseLevelNames = {
  1: '一般',
  2: '重大',
  3: '特大',
}
// 案件
export const CaseTable = {
  tableName: "案件表",
  fields: [
    // 案件基础信息
    { field: 'caseId', type: 'String', description: '案件唯一编号' },
    { field: 'caseName', type: 'String', description: '案件名称' },
    { field: 'caseType', type: 'Number', description: '案件类型: 1-刑事案件 2-民事案件 3-行政案件 4-经济案件 5-其他' },
    { field: 'caseLevel', type: 'Number', description: '案件级别: 1-一般 2-重大 3-特大' },
    { field: 'caseStatus', type: 'Number', description: '案件状态: 1-立案 2-侦查中 3-审查起诉 4-审判中 5-已结案 6-归档' },
    
    // 案发时间信息
    { field: 'occurrenceTime', type: 'Date', description: '案发时间' },
    { field: 'reportTime', type: 'Date', description: '报案时间' },
    
    // 案发地点信息
    { field: 'province', type: 'String', description: '省份' },
    { field: 'city', type: 'String', description: '城市' },
    { field: 'address', type: 'String', description: '详细地址' },
    { field: 'locationType', type: 'Number', description: '地点类型: 1-住宅 2-商业场所 3-公共场所 4-野外 5-交通工具 6-其他' },
    { field: 'longitude', type: 'Number', description: '经度' },
    { field: 'latitude', type: 'Number', description: '纬度' },
    { field: 'locationDescription', type: 'String', description: '位置描述' },
    
    // 涉案人员信息
    { field: 'suspects', type: 'Array', description: '嫌疑人列表' },
    { field: 'victims', type: 'Array', description: '受害人列表' },
    { field: 'witnesses', type: 'Array', description: '证人列表' },
    { field: 'relatedPersons', type: 'Array', description: '其他相关人员' },
    
    // 案件详情
    { field: 'caseDescription', type: 'String', description: '案件描述' },

    // 侦查信息
    { field: 'investigatingUnit', type: 'String', description: '侦查单位' },
    // 警号数组
    { field: 'investigators', type: 'Array', description: '侦查人员' },
  ],
  data: [
    {
      caseId: "A202401001",
      caseName: "朝阳区珠宝店抢劫案",
      caseType: 1,
      caseLevel: 2,
      caseStatus: 3,
      occurrenceTime: new Date("2024-01-15T20:30:00"),
      reportTime: new Date("2024-01-15T20:45:00"),
      province: "北京市",
      city: "北京市",
      address: "朝阳区建国路88号周大福珠宝店",
      locationType: 2,
      longitude: 116.483,
      latitude: 39.916,
      locationDescription: "大型购物中心内珠宝专卖店，临近地铁站",
      suspects: [
        { name: "张老三", idCard: "110105198510153215", role: "主犯" },
        { name: "李老四", idCard: "130434198812043226", role: "从犯" }
      ],
      victims: [
        { name: "王美丽", idCard: "110108199203154321", injury: "轻微擦伤" },
        { name: "周大福珠宝店", type: "企业" }
      ],
      witnesses: [
        { name: "刘保安", idCard: "110106198305154332", relation: "商场保安" },
        { name: "陈顾客", idCard: "110107199105154343", relation: "现场顾客" }
      ],
      relatedPersons: [
        { name: "赵经理", idCard: "110102197809154354", relation: "店铺经理" }
      ],
      caseDescription: "两名蒙面男子持械闯入珠宝店，抢走价值约50万元的金饰后逃离现场",
      investigatingUnit: "刑侦支队",
      investigators: ["010001", "010007", "020001"]
    },
    {
      caseId: "A202401002",
      caseName: "海淀区网络诈骗案",
      caseType: 4,
      caseLevel: 1,
      caseStatus: 2,
      occurrenceTime: new Date("2024-01-20T14:00:00"),
      reportTime: new Date("2024-01-22T09:30:00"),
      province: "北京市",
      city: "北京市",
      address: "海淀区中关村软件园",
      locationType: 2,
      longitude: 116.306,
      latitude: 39.987,
      locationDescription: "高科技产业园区内办公楼",
      suspects: [
        { name: "王网络", idCard: "110108199008153216", role: "诈骗团伙头目" }
      ],
      victims: [
        { name: "李投资", idCard: "110105198512153227", loss: "20万元" },
        { name: "张理财", idCard: "110106199103153238", loss: "15万元" }
      ],
      witnesses: [],
      relatedPersons: [
        { name: "钱技术", idCard: "110107198709153249", relation: "技术支持人员" }
      ],
      caseDescription: "通过网络平台以高收益理财为诱饵实施诈骗，涉案金额达35万元",
      investigatingUnit: "经侦支队",
      investigators: ["010008", "020008", "030008"]
    },
    {
      caseId: "A202401003",
      caseName: "西城区交通事故逃逸案",
      caseType: 3,
      caseLevel: 1,
      caseStatus: 5,
      occurrenceTime: new Date("2024-02-05T19:20:00"),
      reportTime: new Date("2024-02-05T19:25:00"),
      province: "北京市",
      city: "北京市",
      address: "西城区金融大街与武定侯街交叉口",
      locationType: 5,
      longitude: 116.362,
      latitude: 39.917,
      locationDescription: "金融核心区域十字路口，监控设备完善",
      suspects: [
        { name: "孙司机", idCard: "110102198203153250", role: "肇事司机" }
      ],
      victims: [
        { name: "周行人", idCard: "110104199506153261", injury: "腿部骨折" }
      ],
      witnesses: [
        { name: "吴出租车", idCard: "110105198407153272", relation: "出租车司机" }
      ],
      relatedPersons: [
        { name: "郑车主", idCard: "110106197912153283", relation: "车辆所有人" }
      ],
      caseDescription: "黑色轿车闯红灯撞伤行人后逃逸，48小时内破案",
      investigatingUnit: "交警支队",
      investigators: ["010003", "030003", "020003"]
    },
    {
      caseId: "A202402004",
      caseName: "东城区毒品交易案",
      caseType: 1,
      caseLevel: 2,
      caseStatus: 4,
      occurrenceTime: new Date("2024-02-10T22:00:00"),
      reportTime: new Date("2024-02-10T22:15:00"),
      province: "北京市",
      city: "北京市",
      address: "东城区王府井大街附近小巷",
      locationType: 3,
      longitude: 116.417,
      latitude: 39.924,
      locationDescription: "繁华商业区背街小巷，人流量大",
      suspects: [
        { name: "陈毒贩", idCard: "110101198601153294", role: "毒品提供者" },
        { name: "林买家", idCard: "130434199112153305", role: "购买者" }
      ],
      victims: [],
      witnesses: [
        { name: "杨居民", idCard: "110102198804153316", relation: "附近居民" }
      ],
      relatedPersons: [
        { name: "黄中介", idCard: "110103197706153327", relation: "交易中间人" }
      ],
      caseDescription: "现场抓获毒品交易，缴获冰毒50克",
      investigatingUnit: "禁毒支队",
      investigators: ["010007", "030007", "040007"]
    },
    {
      caseId: "A202402005",
      caseName: "丰台区入室盗窃案",
      caseType: 1,
      caseLevel: 1,
      caseStatus: 2,
      occurrenceTime: new Date("2024-02-12T14:00:00"),
      reportTime: new Date("2024-02-12T18:30:00"),
      province: "北京市",
      city: "北京市",
      address: "丰台区方庄小区芳古园15号楼3单元502",
      locationType: 1,
      longitude: 116.434,
      latitude: 39.868,
      locationDescription: "老旧居民小区，监控设施不完善",
      suspects: [
        { name: "朱小偷", idCard: "130434199305153338", role: "实施盗窃" }
      ],
      victims: [
        { name: "秦业主", idCard: "110106198910153349", loss: "现金、首饰等价值3万元" }
      ],
      witnesses: [
        { name: "魏邻居", idCard: "110107197812153350", relation: "对门邻居" }
      ],
      relatedPersons: [],
      caseDescription: "技术开锁入室盗窃，丢失贵重物品若干",
      investigatingUnit: "派出所",
      investigators: ["010009", "030009", "040009"]
    },
    {
      caseId: "A202403006",
      caseName: "通州区工地伤害案",
      caseType: 1,
      caseLevel: 1,
      caseStatus: 3,
      occurrenceTime: new Date("2024-03-05T10:30:00"),
      reportTime: new Date("2024-03-05T10:45:00"),
      province: "北京市",
      city: "北京市",
      address: "通州区运河核心区建筑工地",
      locationType: 2,
      longitude: 116.697,
      latitude: 39.912,
      locationDescription: "大型建筑工地，工人聚集区",
      suspects: [
        { name: "冯工头", idCard: "130434198507153361", role: "施暴者" }
      ],
      victims: [
        { name: "楚工人", idCard: "410325199208153372", injury: "头部外伤，轻微脑震荡" }
      ],
      witnesses: [
        { name: "卫工友", idCard: "410326199012153383", relation: "同班组工人" }
      ],
      relatedPersons: [
        { name: "沈老板", idCard: "110105197503153394", relation: "工地负责人" }
      ],
      caseDescription: "因工资纠纷引发的故意伤害案件",
      investigatingUnit: "治安支队",
      investigators: ["010002", "030002", "040002"]
    },
    {
      caseId: "A202403007",
      caseName: "昌平区山林失火案",
      caseType: 5,
      caseLevel: 2,
      caseStatus: 5,
      occurrenceTime: new Date("2024-03-15T13:00:00"),
      reportTime: new Date("2024-03-15T13:20:00"),
      province: "北京市",
      city: "北京市",
      address: "昌平区十三陵镇山林区域",
      locationType: 4,
      longitude: 116.223,
      latitude: 40.287,
      locationDescription: "山区林地，植被茂密",
      suspects: [
        { name: "韩游客", idCard: "110114199104153405", role: "违规用火" }
      ],
      victims: [
        { name: "昌平区林业局", type: "政府部门" }
      ],
      witnesses: [
        { name: "杨护林员", idCard: "110114197809153416", relation: "山林管理员" }
      ],
      relatedPersons: [
        { name: "王消防", idCard: "110105198606153427", relation: "消防队员" }
      ],
      caseDescription: "游客野外烧烤引发山林火灾，过火面积约5亩",
      investigatingUnit: "派出所",
      investigators: ["010009", "020009", "040009"]
    },
    {
      caseId: "A202403008",
      caseName: "石景山区绑架案",
      caseType: 1,
      caseLevel: 3,
      caseStatus: 4,
      occurrenceTime: new Date("2024-03-20T08:30:00"),
      reportTime: new Date("2024-03-20T16:00:00"),
      province: "北京市",
      city: "北京市",
      address: "石景山区鲁谷街道",
      locationType: 1,
      longitude: 116.238,
      latitude: 39.905,
      locationDescription: "居民小区地下停车场",
      suspects: [
        { name: "何绑匪", idCard: "130434198912153438", role: "主犯" },
        { name: "吕同伙", idCard: "130434199208153449", role: "从犯" }
      ],
      victims: [
        { name: "施儿童", idCard: "110107201803153450", injury: "受到惊吓" }
      ],
      witnesses: [
        { name: "张邻居", idCard: "110107198311153461", relation: "小区居民" }
      ],
      relatedPersons: [
        { name: "孔家长", idCard: "110106198504153472", relation: "受害人父亲" }
      ],
      caseDescription: "儿童上学途中被绑架，索要赎金100万元，成功解救",
      investigatingUnit: "特警支队",
      investigators: ["010004", "020004", "030004"]
    },
    {
      caseId: "A202404009",
      caseName: "大兴区非法经营案",
      caseType: 4,
      caseLevel: 1,
      caseStatus: 3,
      occurrenceTime: new Date("2024-04-02T09:00:00"),
      reportTime: new Date("2024-04-10T14:30:00"),
      province: "北京市",
      city: "北京市",
      address: "大兴区黄村镇批发市场",
      locationType: 2,
      longitude: 116.338,
      latitude: 39.735,
      locationDescription: "大型商品批发市场，商户密集",
      suspects: [
        { name: "严商贩", idCard: "110115198203153483", role: "非法经营者" }
      ],
      victims: [
        { name: "消费者群体", type: "群体" }
      ],
      witnesses: [
        { name: "华商户", idCard: "110115197912153494", relation: "相邻商户" }
      ],
      relatedPersons: [
        { name: "金供货商", idCard: "130434198708153505", relation: "假冒产品提供者" }
      ],
      caseDescription: "销售假冒注册商标商品，涉案金额80万元",
      investigatingUnit: "经侦支队",
      investigators: ["010008", "020008", "040008"]
    },
    {
      caseId: "A202404010",
      caseName: "顺义区聚众斗殴案",
      caseType: 1,
      caseLevel: 2,
      caseStatus: 5,
      occurrenceTime: new Date("2024-04-08T21:00:00"),
      reportTime: new Date("2024-04-08T21:10:00"),
      province: "北京市",
      city: "北京市",
      address: "顺义区后沙峪镇酒吧街",
      locationType: 3,
      longitude: 116.556,
      latitude: 40.121,
      locationDescription: "娱乐场所集中区域，夜间人流量大",
      suspects: [
        { name: "陶主犯", idCard: "110113199506153516", role: "组织者" },
        { name: "黎从犯", idCard: "110113199311153527", role: "参与者" }
      ],
      victims: [
        { name: "姜受伤者", idCard: "110112199408153538", injury: "多处软组织损伤" }
      ],
      witnesses: [
        { name: "戴酒保", idCard: "110113198909153549", relation: "酒吧工作人员" }
      ],
      relatedPersons: [
        { name: "宋调解", idCard: "110111198102153550", relation: "双方朋友" }
      ],
      caseDescription: "因口角引发的群体斗殴，涉及10余人",
      investigatingUnit: "巡警支队",
      investigators: ["010010", "020010", "030010"]
    }
  ].map(item => ({
    ...item,
    caseType: caseTypeNames[item.caseType],
    caseStatus: caseStatusNames[item.caseStatus],
    locationType: locationTypeNames[item.locationType],
    caseLevel: caseLevelNames[item.caseLevel],
    occurrenceTime: item.occurrenceTime.format(),
    reportTime: item.reportTime.format(),
  }))
}