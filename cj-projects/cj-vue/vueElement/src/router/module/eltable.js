const eltable = {
    name: "表格增删改",
    path: "table",
    component: () =>
        import ("@/pages/element/eltable/index"),
    // 添加源路由，控制显示谁
    meta: { index: 0, title: "表格增删改", showFooter: true }
};

export default eltable;