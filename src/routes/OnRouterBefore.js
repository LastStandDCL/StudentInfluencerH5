import {useLocation,useNavigate} from "react-router-dom";
import {useEffect} from "react";
import routes from "./index";
const OnRouterBefore = ({routers}) => {

    //1.在路由数组中找当前页面路由的对应路由项
    const fineRouter = (path) => {
        const routers = Array.from(routes);
        for(let val of routers) {
            //console.log(val);
            if(val.path===path) return val;
            if(val.children !== undefined){
                for(let val2 of val.children){
                    if(val.path + "/" + val2.path === path) return val2;
                }
            }
        }
        return null;
    }

    //2.路由守卫判断
    const judgeRouter = (pathname,navigate) => {
        console.log(pathname)
        //2.1路由数组找路由项
        const findRoute = fineRouter(pathname);
        window.scrollTo(0, 0);
        //2.2没找到，说明没有这个路由，直接404
        if(findRoute === null) {
            navigate("/404");
            return;
        }
        //2.3路由项如果有权限需求，进行逻辑验证
        if(findRoute.meta.auth === true) {
            //用户未登陆，挑战登陆页面
            // if(!localStorage.getItem("user")) {
            //     navigate("/auth/login");
            // }
        }

        if(findRoute.meta.title === undefined) {
            document.title = "西工大校园大使平台";
        }else{
            document.title = findRoute.meta.title;
        }
    }

    //3.基于useEffect监听页面路由改变。然后组件重新加载，又重新校验权限。
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(()=>{
        //路由守卫判断
        judgeRouter(pathname,navigate);
    },[pathname])
    return routers;
}
export default OnRouterBefore;
