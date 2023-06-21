import ProfileEdit from "../../components/TeamPage/ProfileEdit";
import PageTitle from "../../components/PageTitle";
import ResetPassword from "./ResetPassword";

const ProfilePage = () => {


    return (
        <div>
            <PageTitle text='我的个人信息'/>
            <ProfileEdit/>
            <PageTitle text='修改密码'/>
            <ResetPassword/>
        </div>
    );
};

export default ProfilePage;
