import React from 'react';
// import {Layout, Carousel} from 'antd'
import LoginForm from "./components/KiddoCompoments/loginForm";
import RegisterForm from "./components/KiddoCompoments/registerForm";
import ResetPsw from "./components/KiddoCompoments/resetPsw";
import ManageUser from "./components/KiddoCompoments/manageUser";
import AddDoc from "./components/KiddoCompoments/addDoc";
import ManageProcess from "./components/KiddoCompoments/manageProcess";
import ManageDep from "./components/KiddoCompoments/manageDep";
import ManageDoc from "./components/KiddoCompoments/manageDoc";

function App() {

    // 以下为调用组件时的传参内容示例
    const USERS=[
        {name:"梁晓", blackList:"是", number:"13505351111", cancel:"1", miss:"0"},
        {name:"梁晓", blackList:"是", number:"13505351111", cancel:"1", miss:"0"},
        {name:"梁晓", blackList:"是", number:"13505351111", cancel:"1", miss:"0"},
        {name:"梁晓", blackList:"是", number:"13505351111", cancel:"1", miss:"0"},
        {name:"梁晓", blackList:"是", number:"13505351111", cancel:"1", miss:"0"},
        {name:"梁晓", blackList:"是", number:"13505351111", cancel:"1", miss:"0"},
    ];
    const PROCESSES=[
        {name:"口腔科", process:"挂号 -> 就诊 -> 付款 -> 取药 -> 复诊"},
        {name:"儿科", process:"挂号 -> 就诊 -> 付款 -> 取药 -> 复诊"},
    ];
    const DEPS=[
        {name:"口腔科", docNum:10, userNum:20, remain:25},
        {name:"儿科", docNum:9, userNum:22, remain:23},
    ];
    const DOCS=[
        {name:"梁晓", sex:"女", number:"13505351111", dep:"口腔科", remain:"12/20"},
        {name:"廖俊峰", sex:"男", number:"13505351576", dep:"儿科", remain:"10/20"},
        {name:"梁晓", sex:"女", number:"13505351111", dep:"口腔科", remain:"12/20"},
        {name:"梁晓", sex:"女", number:"13505351111", dep:"口腔科", remain:"12/20"},
    ];

  return (
    <div className="App">

        {/*组件调用方法↓↓↓*/}
        <LoginForm/>
        <RegisterForm/>
        <ResetPsw/>
        <AddDoc/>
        <ManageUser userInfo={USERS}/>
        <ManageProcess processInfo={PROCESSES} />
        <ManageDep depInfo={DEPS} />
        <ManageDoc docInfo={DOCS} />

    </div>
  );
}

export default App;
